const time = document.getElementById("time");
//console.log(time);
let [hour, minute, second] = [0, 0, 0];
let timer = null;

//This function is responsible for incrementing timer
function stopwatch(){
    second++;
    //This block will execute every 60 seconds
    if(second > 59){
        second = 0;
        minute++;
        
        //This block will execute every 60 minutes
        if(minute > 59){
            minute = 0;
            hour++;
        }
    }

    //We want to display hour, minute and second with a zero if it is less than 10
    h = hour < 10 ? "0" + hour : hour;
    m = minute < 10 ? "0" + minute : minute;
    s = second < 10 ? "0" + second : second;

    //insert the timer
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}

//This function gets called when the user clicks on the start button
function start(){
    if(timer !== null){
        clearInterval(timer);
    }
    //We are creating an interval which will call function stopwatch every second
    timer = setInterval(stopwatch, 1000);
}

//This function gets called when the user clicks on the stop button
function stop(){
    //Clears the interval
    clearInterval(timer);
}

//This function gets called when the user clicks on the reset button
function reset(){
    //Clears the interval
    clearInterval(timer);

    //Resetting the timer
    document.getElementById("time").innerHTML = "00:00:00"
}