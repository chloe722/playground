/*$('docuemnt').ready(function(){ 
    function DateTimezone(region, country) {
        var currentTime = new Date();
        var date = currentTime.getDate();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var second = currentTime.getSeconds();*/

function calcTime(city, offset){
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset()* 60000);
    nd = new Date(utc +(3600000*offset));
    return  nd.toLocaleString();
}

function Alaskaupdate(){
    var AlaskaTime = document.getElementById('alaskaTime');
    AlaskaTime.innerText = calcTime('Alaska', -8);
}

function LosAngeleskupdate(){
    var LosAngelesTime = document.getElementById('losangelesTime');
    LosAngelesTime.innerText = calcTime('Los Angeles', -7);
}

function NewYorkupdate(){
    var NewYorkTime = document.getElementById('newyorkTime');
    NewYorkTime.innerText = calcTime('New Work', -4);
}


function Londonupdate(){
    var LondonTime = document.getElementById('londonTime');
    LondonTime.innerText = calcTime('London', 1);
}


function Berlinupdate(){
    var BerlinTime = document.getElementById('berlinTime');
    BerlinTime.innerText = calcTime('Berlin', 2);
}

function Vilniusupdate(){
    var VilniusTime = document.getElementById('vilniusTime');
    VilniusTime.innerText = calcTime('Vilnius', 3);
}

function Taipeiupdate(){
    var TaipeiTime = document.getElementById('taipeiTime');
    TaipeiTime.innerText = calcTime('Taipei', 8);
}
function Tokyoupdate(){
    var TokyoTime = document.getElementById('tokyoTime');
    TokyoTime.innerText = calcTime('Tokyo', 9);
}

function Sydneyupdate(){
    var SydneyTime = document.getElementById('sydneyTime');
    SydneyTime.innerText = calcTime('Sydney', 10);
}

setInterval(Alaskaupdate,1000);//setInterval makes clock 'tick' repeatedly
setInterval(NewYorkupdate,1000);
setInterval(LosAngeleskupdate,1000);
setInterval(Londonupdate,1000); 
setInterval(Berlinupdate,1000);
setInterval(Vilniusupdate,1000);
setInterval(Taipeiupdate,1000);
setInterval(Tokyoupdate,1000);
setInterval(Sydneyupdate,1000);


