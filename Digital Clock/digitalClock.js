
$('docuemnt').ready(function(){
    function displayTime() {
        var currentTime = new Date();
        var date = currentTime.getDate();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var second = currentTime.getSeconds();

        if(second < 10) {
            second = "0" + second;
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        else if (hours < 10) {
            hours = "0" + hours;
        }

    var LondonTime = document.getElementById('londonTime');
    LondonTime.innerText = hours + ":" + minutes + ":" + second;

    var BerlinTime = document.getElementById('berlinTime');
    BerlinTime.innerText = (hours+1)%24 + ":" + minutes + ":" + second;

    var TaipeiTime = document.getElementById('taipeiTime')
    TaipeiTime.innerText = hours-17 + ":" + minutes + ":" + second;

    }

setInterval(displayTime,1000); //setInterval makes clock 'tick' repeatedly, 1000 millsecond is 1 sec. the function run every second 
displayTime();
});