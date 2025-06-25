const arr = [
  "CANE",
  "GATTO",
  "PANE",
  "MELA",
  "SEDIA",
  "TAVOLO",
  "SCUOLA",
  "FIUME",
  "BOSCO",
  "SOLE",
  "LAMPADA",
  "INVERNO",
  "PINGUINO",
  "MATITA",
  "GELATO",
  "MONTAGNA",
  "BAMBINO",
  "SENTIERO",
  "CASTELLO",
  "SPECCHIO",
  "OMBRELLO",
  "ZUCCHERO",
  "SCIARPA",
  "TRAMPOLINO",
  "FIORAIO",
  "ZATTERA",
  "ATLANTE",
  "CALAMARO",
  "ELEFANTE",
  "SOTTOPASSAGGIO",
  "GORGOGLIO",
  "SCHERZO",
  "RIZOMA",
  "SCHIUMA",
  "QUERCIA",
  "CLANDESTINO",
  "SCOMBUSSOLATO",
  "FISIOTERAPIA",
  "COSCIENZA",
  "DISSONANZA",
  "ASTRUSO",
  "BISBIGLIO",
  "ZIGZAGARE",
  "STARNUTO",
  "GAZZELLA",
  "SBADIGLIO",
  "SGUATTERO",
  "TACCUINO",
  "VORTICARE",
  "GNOMONE",
  "INARRESTABILE",
  "SOVRACCARICO",
  "INCOMPRENSIBILE",
  "SOTTOSOPRA",
  "SOVRAFFOLLATO",
  "PARALLELEPIPEDO",
  "INVOLONTARIAMENTE",
  "MALDESTRAMENTE",
  "INSOPPORTABILE",
  "SOVRASTRUTTURA",
  "UVA",
  "ECO",
  "APE",
  "RE",
  "OCA",
  "BOA",
  "ICE",
  "UFO",
  "VAN",
  "TOP",
  "JOLLY",
  "KOALA",
  "TAXI",
  "YOGURT",
  "WHISKY",
  "XENOFOBO",
  "JACKPOT",
  "KAYAK",
  "WEEKEND",
  "EXTRAVERGINE",
  "PORTAOMBRELLI",
  "CAPOLAVORO",
  "SOVRACCARICO",
  "BATTICUORE",
  "ROMPICAPO",
  "PARACADUTE",
  "SPAZZACAMINO",
  "SOTTACETO",
  "ACCHIAPPASOGNI",
  "FISCHIETTARE",
  "FANTASMA",
  "TENEBRE",
  "INCUBO",
  "SEGRETO",
  "BRIVIDO",
  "SUSSURRO",
  "OSCURITA",
  "MACABRO",
  "LABIRINTO",
  "STREGONERIA"
];

const div = document.getElementById("app");
const dialog = document.getElementById("di");
const outcomeButton = document.getElementById("closeButton");
const clearButton = document.getElementById("clearButton");
const sendButton = document.getElementById("sendButton");
const outcome = document.getElementById("outcome");
const input = document.getElementById("log");
const alert = document.getElementById("alert");
const keyArea = document.getElementById("letters");

function getWord() {
  const t = arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < t.length; i++) {
    let p = document.createElement("p");
    p.textContent = " ";
    p.id = i;
    div.appendChild(p);
  }
  console.log(t);
  return t;
}

let word = ""
let letters = [];
let nl = 0;
let lives = 5;

function renderLives() {
  const livesDiv = document.getElementById("lives");
  livesDiv.textContent = " ".repeat(lives).split("").map(_=>"❤️").join(" ");
}

function startGame() {
    word = getWord();
    resetAvailableLetters();
    letters = [];
    nl = 0;
    lives = 5;
    renderLives()
    setListeners();
}

function paintLetter(i) {
    const p = document.getElementById(i.toString());
    p.textContent = word[i];
}

function livesDecrement() {
  lives--;
  renderLives();
  if (lives === 0) {
    showOutcome("You Lost");
  }
}

function showOutcome(o) {
  remouveListeners();
  outcome.textContent = o;
  dialog.showModal();
}

function resetAvailableLetters() {
  for (let i = 0; i < letters.length; i++) {
    const p = document.getElementById(letters[i]);
    if (p) p.style.color = "black";
  }
}

function removeFromAvailableLetters(l) {
  letters.push(l);
  const p = document.getElementById(l);
  if (p) p.style.color = "transparent";
}

function sendAllert(message) {
    alert.textContent = message;
    setTimeout(() => { alert.textContent = ""; }, 1000);
}

function onKeydown(e) {
  e.preventDefault();
  if (e.key === "Enter") {
    guessWord(input.value);
  } 
  else if (e.key === "Backspace") {
    if (e.ctrlKey || e.metaKey) {
      input.value = ""; 
    }
    else { 
      input.value = input.value.slice(0, -1); 
    }
  }
  else if (e.key.length === 1) {
    if (input.value.length >= word.length) {
      sendAllert("Over word length !");
      return;
    }
    input.value += e.key.toUpperCase();
  }
}

function onClick(e){
  if (e.target.tagName === 'P') {
    const letter = e.target.textContent;
    const ke = new KeyboardEvent('keydown', {
      key: letter,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(ke);
  }
}

function setListeners() {
  document.addEventListener('keydown', onKeydown);
  keyArea.addEventListener('click', onClick);
}
function remouveListeners() {
  keyArea.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onKeydown);
}

function guessWord(guess) {
    console.log(guess);
    input.value = "";

    if(guess === "") {
      sendAllert("Empty guess !");
      return;
    }

    if (guess.length === 1) {
        if (letters.includes(guess)) {
          sendAllert("Letter already guessed !");
          return;
        }
        let r = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                paintLetter(i);
                nl++;
                r = true;
                if (nl === word.length) {
                  showOutcome("You Won");
                  return;
                }
            }
        }
        removeFromAvailableLetters(guess);
        if (r) {
            return;
        }
    }

    if (word === guess) {
        for (let i = 0; i < word.length; i++) {
            paintLetter(i)
        }
        showOutcome("You Won");
        return;
    }

    livesDecrement();
};

outcomeButton.onclick = () => {
  dialog.close();
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
  startGame()
};

clearButton.onclick = () => {
  input.value = "";
}

sendButton.onclick = () => {
  guessWord(input.value);
};

startGame();