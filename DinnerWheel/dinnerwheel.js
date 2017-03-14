$(document).ready(function(){
    $('button').click(function(){
        $('.wrapper').slideDown('slow', function(){
            var rot = Math.floor(Math.random() * 360);
            console.log('rot', rot);
            var num = rot + 3240;
            var value = 'rotate(' + num + 'deg)';
            $('.spinning-wheel').css('transform', value);   
            $('.Arrow').fadeIn('slow');
            $('.button-wrapper').fadeOut('slow');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    setTimeout(function(){
        if( rot<=21 || (336 < rot && rot <= 360)){
            $('.pie7').addClass('highlight');}
        else if( 21 < rot && rot<= 66){
             $('.pie6').addClass('highlight');}
        else if( 66 < rot && rot<= 111){
             $('.pie5').addClass('highlight');}
        else if( 111 <= rot && rot<= 156){
             $('.pie4').addClass('highlight');}
        else if( 156 < rot && rot<= 201){
             $('.pie3').addClass('highlight');}
        else if( 201 < rot && rot<= 246){
             $('.pie2').addClass('highlight');}
        else if( 246 < rot && rot<= 291){
             $('.pie1').addClass('highlight');}
        else if( 291 <= rot && rot<= 336){
             $('.pie8').addClass('highlight');}
    } ,5000);
       })
    })
})
