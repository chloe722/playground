
const table = $("#pixel_canvas");

// line 5 to line 11 is to retrieve whether the grid has been clicked.
$("body").on("contextmenu", function(evt){
    evt.preventDefault();
  }, false);
  
  var mouseDown = false;
  $("body").mousedown(function(e) {
    if(e.which === 1){
      mouseDown = true;}
    if(e.which === 3 ){
      mouseDown = false;}
  });
  
  $("body").on("mouseup",function() {
      mouseDown=false;
  });
  

function makeGrid() {
    var height = $("#input_height").val();
    var width = $("#input_width").val();
    table.empty();
    for(var i=0; i<height; i++){
        let row = $('<tr></tr>');
        for(var j=0; j <width; j++){
            let cell = $("<td></td>");
            row.append(cell);
            cell.hide();
            setTimeout(() => {
                cell.fadeIn();
            }, 15*i + 15*j);
        }
        $("#pixel_canvas").append(row); 
    }   

    $("#pixel_canvas td").mousedown(function(e){
        var colorYouPicked = $('#colorPicker').val();
        var currentBg = rgb2hex($(this).css("background-color"));
      if(e.which === 3){
        if (currentBg === colorYouPicked){
            $(this).css("background-color","white");}}
       if(e.which === 1){
            $(this).css("background-color",colorYouPicked)
       };
    });

    $("#pixel_canvas td").mouseenter(function(){
        var colorYouPicked = $('#colorPicker').val();
        if (mouseDown){
           $(this).css("background-color",colorYouPicked);
        }
      });
}


$("#createBtn").on("click",function(event){
    event.preventDefault();
    makeGrid();
    $(".canvasContainer").show();
    $(".header").slideToggle();
    $("#footer").hide();
});

$("#restartButton").on("click",function(){
    $(".header").slideToggle();
    $(".canvasContainer").hide();
    $("#footer").slideToggle();
})

//Convert from rgb to hex
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


