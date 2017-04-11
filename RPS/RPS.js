function rockPaperScissor(userInput) {
        var choices = ['ROCK', 'PAPER', 'SCISSOR'];
        var computerChoice = choices[ Math.floor(Math.random() * 3) ];

        computerChoose(computerChoice);
        userChoose(userInput);
        clearInterval(showRandomInterval);

        if (userInput === 'ROCK' ) {
            if (computerChoice === 'ROCK') {
                dialogText('Rock to rock...Seems we need to fight more to see who is winner');
                $('.rockTorock').show(1000);
            
            } 
            else if (computerChoice === 'PAPER') {
                dialogText('My paper wrapped your rock!..HaHaHa!');
                $('.rockIswrapped').show(1000);
            
            }
            else if (computerChoice === 'SCISSOR') {
                dialogText('Oh no... your rock is too strong..please show some mercy!');
                $('.rockBeatscissor').show(1000);
            
            }
        }
        if (userInput === 'PAPER') {
            if (computerChoice === 'ROCK') {
                dialogText('I am struggling to make my rock to run away from your paper..');
                $('.paperAndpaper').show(1000);
            
            }
            else if (computerChoice === 'PAPER') {
                dialogText('Two papers....what we can do with two papers...? Cannot even fight!');
                $('.paperWraprock').show(1000);
            
            }
            else if(computerChoice === 'SCISSOR') {
                dialogText('Scissor..Scissor..I am going to cut cut cut!');
                $('.scissorAttack').show(1000);               
            }
            setTimeout(function(){
                    $('.restart').show();
                },1000);
        }
        if (userInput === 'SCISSOR') {
            if (computerChoice === 'ROCK') {
                dialogText('My rock is much stronger than your scissor! What you gonna do ?');
                $('.rockCrashuser').show(1000);
            
                
            }
            else if (computerChoice === 'PAPER') {
                dialogText('No No No! Please do not cut my paper');
                $('.beggingCat').show(1000);
            
            }
            else if (computerChoice === 'SCISSOR') {
                dialogText('Both of us are scissor..How about be my friend? PEACE!');
                $('.friend').show(1000);    
            }
        }
        setTimeout(function(){
            $('.restart').show();
        }, 2000);
}


function userChoose(choice) {
    $('.userside').hide();
    if (choice === 'ROCK'){
       $('.userside.rock').show();
    }
    else if (choice === 'PAPER'){
        $('.userside.paper').show();
    }
    else if (choice === 'SCISSOR'){
        $('.userside.scissor').show();
    }
}

function computerChoose(choice) {
    $('.computerside').hide();
    if (choice === 'ROCK'){
       $('.computerside.rock').show();
    }
    else if (choice === 'PAPER'){
        $('.computerside.paper').show();
    }
    else if (choice === 'SCISSOR'){
        $('.computerside.scissor').show();
    }
}

function dialogText(text){
    $('#dialog').text(text).show(1000);
}

function showRandom(){
    var choices = ['ROCK', 'PAPER', 'SCISSOR'];
    var computerChoice = choices[ Math.floor(Math.random() * 3) ];
    var humanChoice = choices[ Math.floor(Math.random() * 3) ];
    computerChoose(computerChoice);
    userChoose  (humanChoice);
}

$('document').ready(function(){
        $('.cat,.boy').hide(500);
        $('.cat2,.boy2').show(1000);
        setTimeout(function(){$('.cat2,.boy2').hide();}, 900);
        $('.cat3,.boy3').show(2000);

        $('.restart').click(againClick);
        setTimeout(function(){
            $('.start').show();
        }, 3000);
        $('.start').click(function(){
            setTimeout(function(){
                $('.BUTTON').show(1000);
            }, 2000);
            $('.start').hide();
            $('.graphic').fadeOut();
            window.showRandomInterval = setInterval(showRandom, 90);
        });
        
});

function againClick(){ 
   $('.cinematic').hide(100);
   $('#dialog').hide(100);
   $('.restart').hide();
   window.showRandomInterval = setInterval(showRandom, 80);
}

/*window.onload = function(){
    var hoverSound = document.getElementById('hoverSound');
    var start = document.getElementsByClassName('start');

    start.onmousehover=function(){
        hoverSound.play();
        return false;
    };
}; */
