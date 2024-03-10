const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const btnStart1 = document.querySelector(".player1 .bottom button");
const btnStart2 = document.querySelector(".player2 .bottom button");
const svgCircle1 = document.querySelector('.player1 .cover svg');
const svgCircle2 = document.querySelector('.player2 .cover svg');
const img1 = document.querySelector('.player1 .cover img');
const img2 = document.querySelector('.player2 .cover img');
let isPlaying1 = false;
let isPlaying2 = false;


function pausePlaying1() {
    isPlaying1 = false;
    btnStart1.innerHTML = 'play_arrow';
    img1.classList.add('animate-pause');
}
function pausePlaying2() {
    isPlaying2 = false;
    btnStart2.innerHTML = 'play_arrow';
    img2.classList.add('animate-pause');
}

function stopPlaying1() {
    pausePlaying1();
    img1.classList.remove('animate-pause');
    img1.classList.remove('animate-rotate');
}
function stopPlaying2() {
    pausePlaying2();
    img2.classList.remove('animate-pause');
    img2.classList.remove('animate-rotate');
}
 
 
btnStart1.addEventListener('click', () => {
    if(isPlaying1===false){
        audio1.load();
        audio1.play();
        isPlaying1 = true;
        audio2.pause();
        pausePlaying2();
        isPlaying2 = false;
        btnStart1.innerHTML = 'pause';
        img1.classList.add('animate-rotate');
        img1.classList.remove('animate-pause');
    } else {
        audio1.pause();
        pausePlaying1();
    }
});

btnStart2.addEventListener('click', () => {
    if(isPlaying2===false){
        audio2.load();
        audio2.play();
        isPlaying2 = true;
        audio1.pause();
        pausePlaying1();
        isPlaying1 = false;
        btnStart2.innerHTML = 'pause';
        img2.classList.add('animate-rotate');
        img2.classList.remove('animate-pause');
    } else {
        audio2.pause();
        pausePlaying2();
    }
});