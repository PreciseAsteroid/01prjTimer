/**
 * Created by I053312 on 24/10/2014.
 */
// two global variables
var secondsRemaining;
var intervalHandle;


function startCountdown(){
    var minutes = document.getElementById("minutes").value;
    if (isNaN(minutes)) {
        alert("The value you entered is not  a number");
        return;
    } else if (minutes == "") {
        alert("You must enter a value");
        return;
    }else{
        secondsRemaining = minutes * 60;
        intervalHandle = setInterval(tick, 1000);
        document.getElementById("inputArea").style.display = "none";
    }
}

function tick(){
    // grab the h1
    var timeDisplay = document.getElementById("time");

    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;

    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    // subtract from seconds remaining
    secondsRemaining--;
}

window.onload = function(){
    var inputMinutes = document.createElement("input");
    var startButton = document.createElement("input");
    inputMinutes.setAttribute("id","minutes");
    inputMinutes.setAttribute("type","text");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "start countdown");
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
    startButton.onclick = function(){
        startCountdown();
    }

};
