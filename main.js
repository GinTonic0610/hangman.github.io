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

const firebaseConfig = {
    apiKey: "AIzaSyA1B8PGL4Jafd-BSC85vZSVX3yhWVGqPLw",
    authDomain: "hangman-158e6.firebaseapp.com",
    projectId: "hangman-158e6",
    storageBucket: "hangman-158e6.firebasestorage.app",
    messagingSenderId: "455481786698",
    appId: "1:455481786698:web:3a57d187accf661c7c41b3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


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
const accountBtn   = document.getElementById('accountBtn');
const loginDlg   = document.getElementById('loginDialog');
const loginForm  = document.getElementById('loginForm');
const authEmail  = document.getElementById('authEmail');
const authPass   = document.getElementById('authPass');
const confirmPass  = document.getElementById('confirmPass');
const doAuthBtn  = document.getElementById('doAuth');
const toggleAuth = document.getElementById('toggleAuthMode');
const googleBtnA = document.getElementById('googleAuth');
const closeLogin = document.getElementById('closeLogin');
const logoutDlg = document.getElementById('logoutDialog');
const closeLogout = document.getElementById('closelogoutBtn');
const logoutBtn = document.getElementById('logoutBtn');
const timer = document.getElementById('timer');
const togglePassword = document.getElementById('togglePassword');

let timerId, startTime;

function formatTime(ms) {
  const totalHundredths = Math.floor(ms / 10);
  const hundredths = totalHundredths % 100;
  const totalSeconds = Math.floor(totalHundredths / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours   = Math.floor(totalSeconds / 3600);

  const pad = (n, z=2) => n.toString().padStart(z,'0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(hundredths)}`;
}

function update() {
  const now = performance.now();
  timer.textContent = formatTime(now - startTime);
}

function startTimer() {
  if(timerId) {
    return;
  }
  timer.textContent = formatTime(0);
  startTime = performance.now();
  timerId = setInterval(update, 10);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

let isSignInMode = true;
let isLogged = false;
let togglePasswordVisible = false;

accountBtn.onclick = () => {
  stopTimer();
  if (isLogged) {
    logoutDlg.showModal();
    remouveListeners();
  } else {
  loginDlg.showModal();
  remouveListeners();
  }
};

closeLogin.onclick = () => {
  timer.textContent = formatTime(0);
  loginDlg.close();
  setListeners();
};

closeLogout.onclick = () => {
  timer.textContent = formatTime(0);
  logoutDlg.close();
  setListeners();
};

logoutBtn.onclick = () => {
  logoutDlg.close();
  auth.signOut()
    .then(() => {
      isLogged = false;
      accountBtn.textContent = "Login";
      setListeners();
    })
    .catch(err => alert(err.message));
};

loginDlg.addEventListener('cancel', event => {
  event.preventDefault();
  loginDlg.close();
  setListeners();
});

logoutDlg.addEventListener('cancel', event => {
  event.preventDefault();
  logoutDlg.close();
  setListeners();
});

toggleAuth.onclick = () => {
  isSignInMode = !isSignInMode;
  if (isSignInMode) {
    doAuthBtn.textContent = 'Sign In';
    toggleAuth.textContent = 'Sign Up';
    confirmPass.style.display = "none";
  } else {
    doAuthBtn.textContent = 'Sign Up';
    toggleAuth.textContent = 'Sign In';
    confirmPass.style.display = "inline";
  }
};

loginForm.onsubmit = e => {
  e.preventDefault();
  const email = authEmail.value;
  const pass  = authPass.value;
  const confirm = confirmPass.value;
  if (isSignInMode) {
    auth.signInWithEmailAndPassword.call(auth, email, pass).catch(err => alert(err.message));
  } else if (pass === confirm) {
    auth.createUserWithEmailAndPassword.call(auth, email, pass).catch(err => alert(err.message));
  } else if (pass !== confirm) {
    console.log("Passwords do not match!");
  } else {
    console.log("Unexpected error during authentication!");
  }
};

auth.onAuthStateChanged(user => {
  if (user) {
    isLogged = true;
    accountBtn.textContent = user.email.split('@')[0].split(/[\.\-_]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    loginDlg.close();
  } else {
    isLogged = false;
  }
});

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
  stopTimer();
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

function hoverLetter(l) {
  const p = document.getElementById(l);
  if (p) p.classList.add("clicked");
  setTimeout(() => { p.classList.remove("clicked") }, 100);
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
      hoverLetter(e.key);
    }
  }
  else if (e.key.length === 1) {
    if (input.value.length >= word.length) {
      sendAllert("Over word length !");
      return;
    }
    input.value += e.key.toUpperCase();
    startTimer();
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(e.key.toUpperCase())) {
      hoverLetter(e.key.toUpperCase());
    }
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
    startTimer();
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
  timer.textContent = formatTime(0);
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

togglePassword.onclick = () => {
  togglePasswordVisible = !togglePasswordVisible;
  let eyeIcon = document.getElementById('eyeoff');
  if (togglePasswordVisible) {
    authPass.type = 'text';
    confirmPass.type = 'text';
    eyeoff.style.display = 'none';
  } else {
    authPass.type = 'password';
    confirmPass.type = 'password';
    eyeoff.style.display = 'inline';
  }
}

startGame();