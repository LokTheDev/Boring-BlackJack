//pokerCard
let pokerCard = [2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11
];

let playerHand=[];
let playerSum = 0;
let dealerHand=[];
let dealerSum = 0;

//initital
document.getElementById("hit").disabled = true;
document.getElementById("stand").disabled = true;


//Draw function
cardDraw = () => {
const drawRandom = Math.floor(Math.random() * pokerCard.length)
const drawCard = pokerCard[drawRandom]
playerHand.push(drawCard)
pokerCard.splice(drawCard, 1)
playerSum = 0
for (let i = 0; i < playerHand.length; i++) {
    playerSum += playerHand[i];
}
document.getElementById("totalCard").innerHTML = pokerCard.length;
document.getElementById("playerHand").innerHTML = "you hold: " + playerHand
document.getElementById("state").innerHTML = playerSum
console.log(playerSum)
if(playerSum > 21){
    document.getElementById("state").innerHTML = playerSum + "BUSTED"
    document.getElementById("state").style.color ="red"
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    
} else if(playerSum === 21){
    document.getElementById("state").innerHTML = playerSum + "BLACKJACK!"
    document.getElementById("state").style.color ="red"
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alert("You Won")
}
};

aiDraw = () => {
    const drawRandom = Math.floor(Math.random() * pokerCard.length)
    const drawCard = pokerCard[drawRandom]
    dealerHand.push(drawCard)
    pokerCard.splice(drawCard, 1)
    dealerSum = 0
    for (let i = 0; i < dealerHand.length; i++) {
        dealerSum += dealerHand[i];
    }
    if(dealerSum < playerSum && playerSum <= 21){
        aiDraw();
    }
    document.getElementById("dealerHand").innerHTML = "Dealer hold: " + dealerHand
    document.getElementById("totalCard").innerHTML = pokerCard.length;
    if(dealerSum > playerSum && dealerSum <= 21 && playerSum != 21){
        document.getElementById("title").innerHTML = "dealer Win"
    }else{
        document.getElementById("title").innerHTML = "You Win"
    }

    };


//Check



//clickStart
document.getElementById("start").addEventListener("click", function(){
    cardDraw();
    cardDraw();
    document.getElementById("start").disabled = true;
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;

});

//click Hit
document.getElementById("hit").addEventListener("click", function(){
    cardDraw();
    
    if(playerSum > 21){
        document.getElementById("state").innerHTML = playerSum + "BUSTED"
        document.getElementById("state").style.color ="red"
        document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
        alert("you lost this round!")
    } else if(playerSum === 21){
        document.getElementById("state").innerHTML = playerSum + "BLACKJACK!"
        document.getElementById("state").style.color ="red"
        document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
        alert("You Won")
    }
});

//click stand
document.getElementById("stand").addEventListener("click", function(){
   
    do{aiDraw()}
    while(dealerSum < 16)
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;  
   
});


//for reStart
const sparePoker = [2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11
];

const playerNewHand = [];
const dealerNewHand= [];



//restart
let round = 0;
document.getElementById("res").addEventListener("click", function(){   
    round = round + 1
    pokerCard = [2,3,4,5,6,7,8,9,10,10,10,10,11,
        2,3,4,5,6,7,8,9,10,10,10,10,11,
        2,3,4,5,6,7,8,9,10,10,10,10,11,
        2,3,4,5,6,7,8,9,10,10,10,10,11
    ];
    playerHand = []
    dealerHand = []
    playerSum = 0
    dealerSum = 0 
document.getElementById("start").disabled = false;    
document.getElementById("playerHand").innerHTML = "you hold: " + playerHand
document.getElementById("title").innerHTML = "Round: " + round
document.getElementById("state").innerHTML = playerSum
document.getElementById("dealerHand").innerHTML = "[?][?]"
document.getElementById("totalCard").innerHTML = pokerCard.length;
});