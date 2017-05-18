/*$('docuemnt').ready(function(){ 
    function DateTimezone(region, country) {
        var currentTime = new Date();
        var date = currentTime.getDate();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var second = currentTime.getSeconds();*/

/*function calcTime(city, offset){
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset()* 60000);
    nd = new Date(utc +(3600000*offset));
    val = nd.toLocaleString();
    val_array = val.split(",")
    return val_array[0] + "<br/>" + val_array[1]
}
*/
function Alaskaupdate(){
    var clock = document.getElementById('alaskaTime');
    var now = moment();
    AlaskaTime = now.tz("America/Anchorage").format('MMMM Do YYYY')+'<br/>'+ now.format('h:mm:ss a');
    clock.innerHTML = AlaskaTime;
}

function LosAngeleskupdate(){
    var clock = document.getElementById('losangelesTime');
    var now = moment();
    LosAngelesTime = now.tz("America/Los_Angeles").format('MMMM Do YYYY')+'<br/>'+ now.format('h:mm:ss a');
    clock.innerHTML = LosAngelesTime;
}

function NewYorkupdate(){
    var clock = document.getElementById('newyorkTime');
    var now = moment();
    NewYorkTime = now.tz("America/New_York").format("MMMM Do YYYY")+'<br/>'+ now.format('h:mm:ss a');
    clock.innerHTML = NewYorkTime;
}

function Londonupdate(){
    var clock = document.getElementById('londonTime');
    var now = moment();
    LondonTime = now.format('MMMM Do YYYY') +'<br/>'+ now.format('h:mm:ss a');
    clock.innerHTML = LondonTime;
    
}

function Berlinupdate(){
    var clock = document.getElementById('berlinTime');
    var now = moment();
    var Time = now.tz("Europe/Berlin")
    var BerlinTime = Time.format("MMMM Do YYYY") + '<br/>' + Time.format('HH:mm:ss ');
    clock.innerHTML = BerlinTime;

    if (Time.hours() >= 18 || Time.hours()<=5) {
        $('#BerlinPic').addClass('berlinNight');
    }
}



function Vilniusupdate(){
    var clock = document.getElementById('vilniusTime');
    var now = moment();
    VilniusTime = now.tz("Europe/Vilnius").format("MMMM Do YYYY") + '<br/>' + now.format('h:mm:ss a');
    clock.innerHTML = VilniusTime;
    
}

function Taipeiupdate(){
    var clock = document.getElementById('taipeiTime');
    var now = moment();
    TaipeiTime = now.tz("Asia/Taipei").format("MMMM Do YYYY") + '<br/>' + now.format('h:mm:ss a');
    clock.innerHTML = TaipeiTime;
}

function Tokyoupdate(){
    var clock = document.getElementById('tokyoTime');
    var now = moment();
    TokyoTime = now.tz("Asia/Tokyo").format("MMMM Do YYYY") + '<br/>' + now.format('h:mm:ss a');
    clock.innerHTML = TokyoTime;
}



function Sydneyupdate(){
    var clock = document.getElementById('sydneyTime');
    var now = moment();
    SydneyTime = now.tz("Australia/Sydney").format("MMMM Do YYYY") + '<br/>' + now.format('h:mm:ss a');
    clock.innerHTML = SydneyTime;

}

window.addEventListener("load", function(e){
    setInterval(Alaskaupdate,1000);//setInterval makes clock 'tick' repeatedly
    setInterval(LosAngeleskupdate,1000);
    setInterval(NewYorkupdate,1000);
    setInterval(Londonupdate,1000);
    setInterval(Berlinupdate,1000);
    setInterval(Vilniusupdate,1000);
    setInterval(Taipeiupdate,1000);
    setInterval(Tokyoupdate,1000); 
    setInterval(Sydneyupdate,1000);
})




