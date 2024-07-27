var timer = 3;
var score = 0;
var hitval = 0;


// to increase the score value 
function increaseScoreVal(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

//to dynamically create the bubbles 
function createBubble(){
    let clutter = "";
    
    for(let i = 1;i <=132; i++){
        //to create random numbers in the bubbles 
        let rn = Math.floor(Math.random() * 10)
        // to add the dynamically created bubble into the div 
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#part2").innerHTML = clutter;
}

// to run the timmer 
function runTimer(){
    let timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#part2").innerHTML = `<h1>Game Over!</h1> </br> <h3>Your Score : ${score}</h3>`
            clearInterval(timerInt);
        }
    },1000)
}

// to generate the random hit value 
function hitValue(){
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitval;
}

// to update the score if both the hit value and the clicked value match
document.querySelector("#part2").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    // console.log(clickedNum);
    if(clickedNum === hitval){
        increaseScoreVal();
        createBubble();
        hitValue();
    }
})


runTimer();
createBubble();
hitValue();