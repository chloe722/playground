$(document).ready(function(){
    $('button').click(function(){
        $('.wrapper').slideDown('slow', function(){
            var rot = Math.floor(Math.random() * 360);
            console.log('rot', rot);
            var num = rot + 5000;
            var value = 'rotate(' + num + 'deg)';
            $('.spinning-wheel').css('transform', value);   
            $('.Arrow').fadeIn('slow');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        });
    }) 
})