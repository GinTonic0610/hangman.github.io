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
  "STREGONERIA",
  "FIORE",
  "ALBERO",
  "PRATO",
  "PIAZZA",
  "STRADA",
  "AUTO",
  "TRAFFICO",
  "ARENILE",
  "SPIAGGIA",
  "ONDATA",
  "VENTO",
  "TEMPORALE",
  "NEBBIA",
  "ALLUMINIO",
  "PIETRA",
  "MURAGLIA",
  "CASTAGNO",
  "CASCATA",
  "LAGO",
  "OCEANO",
  "BARCA",
  "VELIERO",
  "FARETRA",
  "ARCO",
  "TULIPANO",
  "ROSPO",
  "RANOCCHIO",
  "RAGNO",
  "LIBELLULA",
  "FARFALLA",
  "LUCCIOLA",
  "CICOGNA",
  "PAPPAGALLO",
  "DONDOLO",
  "CANYON",
  "DESERTO",
  "OASI",
  "ARCOBALENO",
  "AURORA",
  "NOTTURNO",
  "ALBA",
  "TRAMONTO",
  "STELLA",
  "PLANETARIO",
  "COMETA",
  "GALASSIA",
  "SUPERNOVA",
  "NEBULOSA",
  "ASTRONAUTA",
  "ROCKET",
  "SATELLITE",
  "ORSETTO",
  "PANDA",
  "CANGURO",
  "RICCIO",
  "TARTARUGA",
  "CONIGLIO",
  "CAVALLO",
  "SERPENTE",
  "RODITORE",
  "TASSELLO",
  "VITE",
  "PIANA",
  "FIORIERA",
  "CASSETTA",
  "CHIAVE",
  "LUCCICHIO",
  "BRILLANTE",
  "DIAMANTE",
  "SMERALDO",
  "RUBINO",
  "ZAFFIRO",
  "AMETISTA",
  "PERLINA",
  "CORALLO",
  "GHIACCIO",
  "NEVE",
  "ICEBERG",
  "TUNDRA",
  "FENOMENO",
  "MIRAGGIO",
  "ECLISSI",
  "SOLSTIZIO",
  "EQUINOZIO",
  "CALENDARIO",
  "OROLOGIO",
  "BUSSOLA",
  "TERMOMETRO",
  "BAROMETRO",
  "IDROMETRO",
  "VENDETTA",
  "GIUSTIZIA",
  "LIBERTÀ",
  "CARITÀ",
  "ORIZZONTE",
  "RAGGIO",
  "PRISMA",
  "SPECIALE",
  "MOLTITUDINE",
  "EVASIONE"
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
const root = document.documentElement;
const themeButton  = document.getElementById('themeButton');

let word = ""
let letters = [];
let nl = 0;
let lives = 6;

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

function renderLives() {
  const livesDiv = document.getElementById("lives");
  livesDiv.textContent = " ".repeat(lives).split("").map(_=>"♥").join(" ");
}

function startGame() {
    word = getWord();
    resetAvailableLetters();
    letters = [];
    nl = 0;
    lives = 6;
    renderLives();
    resetHangman();
    setListeners();
}

function paintLetter(i) {
    const p = document.getElementById(i.toString());
    p.textContent = word[i];
}

function paintHangman() {
  const part = document.getElementById(`h${lives}`);
  part.style.display = 'inline';
}

function resetHangman(){
  for (let i = 0; i < 6; i++) {
      const part = document.getElementById(`h${i}`);
      part.style.display = "none";
  }
}

function livesDecrement() {
  lives--;
  renderLives();
  paintHangman();
  if (lives === 0) {
    for (let i = 0; i < word.length; i++) {
      paintLetter(i)
    }
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
    if (p) p.style.color = "var(--text-color)";
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
    if (input.value.length >= word.length) {
      sendAllert("Over word length !");
      return;
    }
    const letter = e.target.id;
    if (letter === "Backspace") {
      input.value = input.value.slice(0, -1);
      return;
    }
    input.value += letter;
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

themeButton.onclick = () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
}

startGame();