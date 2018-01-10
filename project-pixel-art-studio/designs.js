const table = $("#pixel_canvas");
// line3 default prevent right click
$("body").on("contextmenu", function(evt){
  evt.preventDefault();
}, false);
// line 8 to line 20 is to retrieve whether the grid has been clicked.
var mouseDown = false;
var mode = 'brush';
$("body").mousedown(function(e) {
  if(e.which === 1){
    mouseDown = true;
    mode = 'brush';
  }
  if(e.which === 3 ){
    mouseDown = true;
    mode = 'erase';
  }
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
        for(var j=0; j<width; j++){
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
        if(mouseDown){
          if( mode === 'brush'){
            $(this).css("background-color",colorYouPicked);}
          else{
             $(this).css("background-color","white");}
        }
      });
}

$("#createBtn").on("click",function(event){
    event.preventDefault();
    makeGrid();
    $(".canvasContainer").show();
    $(".headerContainer").slideToggle();
    $("#footer").hide();
});

$("#restartButton").on("click",function(){
    $(".headerContainer").slideToggle();
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
