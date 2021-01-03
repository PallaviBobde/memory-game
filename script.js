let cards = [
    {
        src:"apple.webp",
        id:0
    },
    {
        src:"apple.webp",
        id:0
    },
    {
        src:"bananas.webp",
        id:0
    },
    {
        src:"bananas.webp",
        id:0
    },
    {
        src:"cherries.webp",
        id:0
    },
    {
        src:"cherries.webp",
        id:0
    },
    {
        src:"orange.webp",
        id:0
    },
    {
        src:"orange.webp",
        id:0
    },
    {
        src:"strawberry.webp",
        id:0
    },
    {
        src:"strawberry.webp",
        id:0
    },
    {
        src:"watermelon.webp",
        id:0
    },
    {
        src:"watermelon.webp",
        id:0
    }
]

// let score = 0;

window.addEventListener("load",()=>{
    startGame();
})



function startGame(){
    for(let i=0 ; i < img.length ; i++){
        img[i].setAttribute("id",i);
    }
    cards.sort((a,b) => 0.5-Math.random());
}

let img = document.querySelectorAll("img");
let result = document.querySelector(".score");

let cardsChoosen = [];
let cardsChoosenId = [];
let correctGuess = [];

for(let i=0 ; i < cards.length ; i++){
    img[i].addEventListener("click",function(){
        flipcard(i);
    })
}

// correctGuess.length = 6;

function flipcard(i){
        img[i].src = cards[i].src;
        cardsChoosen.push(cards[img[i].id]);
        cardsChoosenId.push(img[i].id);
        // console.log(cardsChoosen.length);
        if(cardsChoosen.length == 2){
            setTimeout(check,500);
            result.innerText = `Score: ${correctGuess.length}`;
            if(correctGuess.length == cards.length/2){
                result.innerText = `Congrats you won..`;
                let restartbtn = document.createElement("button");
                restartbtn.innerText = "Restart";
                restartbtn.addEventListener("click",restart);
                let body = document.body;
                body.appendChild(restartbtn);
            }
        }
}

function restart(){
    correctGuess = [];
    startGame();
    let restartbtn = document.querySelector("button");
    let body = document.body;
    body.removeChild(restartbtn);
    result.innerText = "Play!";
}

function check(){
    let card1 = cardsChoosen[0];
    let card2 = cardsChoosen[1];
    if(card1.src == card2.src){
        alert("You found a match.");
        correctGuess.push(card1.src);
        // score++;
        img[cardsChoosenId[0]].src = "white.webp";
        img[cardsChoosenId[1]].src = "white.webp";
        img[cardsChoosenId[0]].disabled = true;
        img[cardsChoosenId[1]].disabled = true;
    }
    else{
        // alert("Sorry, try again..");
        img[cardsChoosenId[0]].src = "color.webp";
        img[cardsChoosenId[1]].src = "color.webp";
    }
    cardsChoosen = [];
    cardsChoosenId = [];
}