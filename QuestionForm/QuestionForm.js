function gridStyle() {
    $("body").removeClass('line-style').addClass('grid-style');
}

function lineStyle() {
    $("body").removeClass('grid-style').addClass('line-style');
}
$(document).ready(function(){
    $(".submitbutton").click(function(){
    alert("I know filling form is annoying.  But..Hey! You did it! :D");
    });
});