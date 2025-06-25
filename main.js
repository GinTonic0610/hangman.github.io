const arr = [
  "Cane",
  "Gatto",
  "Pane",
  "Mela",
  "Sedia",
  "Tavolo",
  "Scuola",
  "Fiume",
  "Bosco",
  "Sole",
  "Lampada",
  "Inverno",
  "Pinguino",
  "Matita",
  "Gelato",
  "Montagna",
  "Bambino",
  "Sentiero",
  "Castello",
  "Specchio",
  "Ombrello",
  "Zucchero",
  "Sciarpa",
  "Trampolino",
  "Fioraio",
  "Zattera",
  "Atlante",
  "Calamaro",
  "Elefante",
  "Sottopassaggio",
  "Gorgoglìo",
  "Scherzo",
  "Rizoma",
  "Schiuma",
  "Quercia",
  "Clandestino",
  "Scombussolato",
  "Fisioterapia",
  "Coscienza",
  "Dissonanza",
  "Astruso",
  "Bisbiglio",
  "Zigzagare",
  "Starnuto",
  "Gazzella",
  "Sbadiglio",
  "Sguattero",
  "Taccuino",
  "Vorticare",
  "Gnomone",
  "Inarrestabile",
  "Sovraccarico",
  "Incomprensibile",
  "Sottosopra",
  "Sovraffollato",
  "Parallelepipedo",
  "Involontariamente",
  "Maldestramente",
  "Insopportabile",
  "Sovrastruttura",
  "Uva",
  "Eco",
  "Ape",
  "Re",
  "Oca",
  "Boa",
  "Ice",
  "Ufo",
  "Van",
  "Top",
  "Jolly",
  "Koala",
  "Taxi",
  "Yogurt",
  "Whisky",
  "Xenofobo",
  "Jackpot",
  "Kayak",
  "Weekend",
  "Extravergine",
  "Portaombrelli",
  "Capolavoro",
  "Sovraccarico",
  "Batticuore",
  "Rompicapo",
  "Paracadute",
  "Spazzacamino",
  "Sottaceto",
  "Acchiappasogni",
  "Fischiettare",
  "Fantasma",
  "Tenebre",
  "Incubo",
  "Segreto",
  "Brivido",
  "Sussurro",
  "Oscurità",
  "Macabro",
  "Labirinto",
  "Stregoneria",
];

const div = document.getElementById("app");
const dialog = document.getElementById("di");
const cButton = document.getElementById("closeButton");
const outcome = document.getElementById("outcome");
const input = document.getElementById("log");

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
    word = getWord().toLocaleLowerCase();
    resetAvailableLetters();
    letters = [];
    nl = 0;
    lives = 5;
    renderLives()
    document.addEventListener('keydown', onKeydown);
}

function paintLetter(i) {
    const p = document.getElementById(i.toString());
    p.textContent = word[i];
}

function livesDecrement() {
  lives--;
  renderLives()
  if (lives === 0) {
    console.log("You Lost");
    outcome.textContent = "You Lost";
    document.removeEventListener('keydown', onKeydown);
    dialog.showModal();
  }
}

function win() {
  console.log("You win");
  outcome.textContent = "You Win";
  document.removeEventListener('keydown', onKeydown);
  dialog.showModal();
}

function resetAvailableLetters() {
  for (let i = 0; i < letters.length; i++) {
    const p = document.getElementById(letters[i].toUpperCase());
    if (p) p.style.color = "black";
  }
}

function removeFromAvailableLetters(l) {
  const p = document.getElementById(l.toUpperCase());
  if (p) p.style.color = "transparent";
}

function onKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.stopPropagation();
    guessWord(input.value);
  } else if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (event.key.length === 1) {
    input.value += event.key;
  }
}

function guessWord(guess) {
    console.log(guess);
    input.value = "";

    if (guess.length === 1) {
        if (letters.includes(guess)) {
            return; // Already guessed this letter
        }
        let r = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                paintLetter(i);
                nl++;
                r = true;
                if (nl === word.length) {
                    win();
                    return;
                }
            }
        }
        letters.push(guess);
        removeFromAvailableLetters(guess);
        if (r) {
            return;
        }
    }

    if (word === guess) {
        for (let i = 0; i < word.length; i++) {
            paintLetter(i)
        }
        win();
        return;
    }

    livesDecrement();
};

cButton.onclick = () => {
  dialog.close();

  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
  startGame()
};

startGame();