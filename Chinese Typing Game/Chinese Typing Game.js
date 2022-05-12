const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm= document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
    '苹果',
    '桃子',
    '香蕉',
    '菠萝'
];

let randomWord;
let score = 0;
let time = 10;

const timeInterval = setInterval(updateTime, 1000);    //start counting down

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)];
}


function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';
    if(time===0){
        clearInterval(timeInterval); //end game
        gameOver();
    }
}

function gameOver(){
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = 'flex';
}

addWordToDOM();

text.addEventListener('input',e =>{
    const insertedText = e.target.value;
    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        e.target.value = '';    //clear the value
        time += 5;
        updateTime();
    }
});

