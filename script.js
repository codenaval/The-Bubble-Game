var score = 0;
var timer = 60;
var hitrn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scorev").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var a = 1; a <= 119; a++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbot").innerHTML = clutter
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbot").innerHTML = `<h1>Game Over</H1>`;
        }
    }, 1000);
}

document.querySelector("#pbot")
    .addEventListener("click", function(details) {
       var clickednum =(Number(details.target.textContent));
       if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
       }
    })


// increaseScore();
getNewHit();
makeBubble();
runTimer();

