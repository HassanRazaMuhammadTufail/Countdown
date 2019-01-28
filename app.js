function myFunction() {
    document.getElementById("butt").disabled=true;
    var hrs = document.getElementById('hrs').value;
    var min = document.getElementById('min').value;
    var sec1 = hrs * 60 * 60;
    var sec2 = min * 60;
    var sec = sec1 + sec2;
    // var hours = Math.floor((sec % (60 * 60 * 24)) / (60 * 60));
    // var minutes = Math.floor((sec % (60 * 60)) / 60);
    // var seconds = Math.floor(sec % (60));
    // var date = new Date().getDate();
    // console.log(hrs, min, sec, hours, minutes, seconds);
    var x = setInterval(() => {
        var secc = sec--;
        if (secc === 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
              }
        var hours = Math.floor((secc % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((secc % (60 * 60)) / 60);
        var seconds = Math.floor(secc % (60));
        if(hours<10 && minutes>10){
            var hr="0" + hours;
            console.log(hr);
            document.getElementById("timer").innerHTML = hr + ":" + minutes + ":" + seconds;
            // return hr;
        }
        else if(minutes<10 && hours>10){
            var mn = "0" + minutes;
            document.getElementById("timer").innerHTML = hours + ":" + mn + ":" + seconds;
        }
        else if(hours<10 && minutes<10){
            var hr = "0" + hours;
            var mn = "0" + minutes;
            document.getElementById("timer").innerHTML = hr + ":" + mn + ":" + seconds;
        }
        else{
            document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
        }

        // document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
        console.log(secc, hours, minutes, seconds);
    }, 1000)
    //    setInterval(()=>{
    //         console.log(--time);
    //     },1000);

}