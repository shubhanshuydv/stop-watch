let [seconds, minutes, hours] = [0,0,0];
let icon = document.getElementById("icon");

let displayTime = document.getElementById("displayTime");

let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
    if(timer!== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);


    if(icon.classList.contains("fa-play")){
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      }
      else{
        icon.classList.add("fa-play");
        icon.classList.remove("fa-pause");
        watchStop()
      }
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00 : 00 : 00"

}