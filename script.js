let interval;
let minutes;
let seconds;

document.getElementById("countdowndiv").style.display="none";

function setTimer(){
  document.getElementById("setCountdowndiv").style.display="none";
  document.getElementById("countdowndiv").style.display="";
  
  minutes = document.getElementById("min").value;
  seconds = document.getElementById("sec").value;
  
  document.getElementById('minutes').innerHTML=minutes;
  document.getElementById('seconds').innerHTML=seconds;
  
  
}


function startTimer() {
  interval = setInterval(function(){
    if (seconds == 0) {
      if (minutes == 0) {
        clearInterval(interval);
        alert("Time's up!");
        return;
      } else {
        minutes--;
        seconds = 59;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        document.getElementById("minutes").innerText = formattedMinutes;
        document.getElementById("seconds").innerText = formattedSeconds;
      }
    } else {
      seconds--;
      const formattedSeconds = String(seconds).padStart(2, "0");

      document.getElementById("seconds").innerText = formattedSeconds;
    }
      
  }, 1000);
}



function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  minutes = 0;
  seconds = 0;
  clearInterval(interval);
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("setCountdowndiv").style.display="";
  document.getElementById("countdowndiv").style.display="none";
}
