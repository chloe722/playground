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

function Timeupdate(ElementId, TimeZone, PicId, newClass){
    var clock = document.getElementById(ElementId);
    var now = moment().tz(TimeZone);
    clock.innerHTML = now.format("MMMM Do YYYY") + '<br/>' + now.format('HH:mm:ss');
    if (now.hours() >= 18 || now.hours()<=5) {
        $(PicId).addClass(newClass);
    }
}


/*function Londonupdate(){
    var clock = document.getElementById('londonTime');
    var now = moment();
    LondonTime = now.format('MMMM Do YYYY') +'<br/>'+ now.format('h:mm:ss a');
    clock.innerHTML = LondonTime;
    
}*/

/*function Berlinupdate(){
    var clock = document.getElementById('berlinTime');
    var now = moment();
    var Time = now.tz("Europe/Berlin")
    var BerlinTime = Time.format("MMMM Do YYYY") + '<br/>' + Time.format('HH:mm:ss ');
    clock.innerHTML = BerlinTime;
    if (Time.hours() >= 18 || Time.hours()<=5) {
        $('#BerlinPic').addClass('berlinNight');
    }
}*/




Timeupdate("alaskaTime" , "America/Anchorage","#AlaskaPic","alaskaNight" );
Timeupdate("newyorkTime" , "America/New_York","#NewYorkPic","newyorkNight");
Timeupdate("losangelesTime" , "America/Los_Angeles","#LAPic","LANight");
Timeupdate("londonTime" , "Europe/London","#LondonPic","londonNight");
Timeupdate("berlinTime", "Europe/Berlin", '#BerlinPic','berlinNight');
Timeupdate("vilniusTime" , "Europe/Vilnius","#VilniusPic","vilniusNight");
Timeupdate("taipeiTime" , "Asia/Taipei","#TaipeiPic","taipeiNight");
Timeupdate("tokyoTime" , "Asia/Tokyo","#TokyoPic","tokyoNight");
Timeupdate("sydneyTime" , "Australia/Sydney","#SydneyPic","sydneyNight");


function UpdateAll(){
    Timeupdate("alaskaTime" , "America/Anchorage","#AlaskaPic","alaskaNight" );
    Timeupdate("newyorkTime" , "America/New_York","#NewYorkPic","newyorkNight");
    Timeupdate("losangelesTime" , "America/Los_Angeles","#LAPic","LANight");
    Timeupdate("londonTime" , "Europe/London","#LondonPic","londonNight");
    Timeupdate("berlinTime", "Europe/Berlin", '#BerlinPic','berlinNight');
    Timeupdate("vilniusTime" , "Europe/Vilnius","#VilniusPic","vilniusNight");
    Timeupdate("taipeiTime" , "Asia/Taipei","#TaipeiPic","taipeiNight");
    Timeupdate("tokyoTime" , "Asia/Tokyo","#TokyoPic","tokyoNight");
    Timeupdate("sydneyTime" , "Australia/Sydney","#SydneyPic","sydneyNight");
}


window.addEventListener("load", function(e){
    setInterval(UpdateAll,1000); //setInterval makes clock 'tick' repeatedly
})




