var rockPaperScissorCalledBefore = false; //prevent double clicking to run the function second time
var startButtonHasClicked = false; 


function rockPaperScissor(userInput) {

    //prevent double clicking to run the function second time
        if(rockPaperScissorCalledBefore) { return; }

        rockPaperScissorCalledBefore = true;

        var choices = ['ROCK', 'PAPER', 'SCISSOR'];
        var computerChoice = choices[ Math.floor(Math.random() * 3) ];

        computerChoose(computerChoice);
        userChoose(userInput);
        clearInterval(showRandomInterval);

        if (userInput === 'ROCK' ) {
            if (computerChoice === 'ROCK') {
                setTimeout(function(){
                    dialogText('Rock to rock...Seems we need to fight more to see who is winner');
                    $('.rockTorock').show(1000);
                }, 700);
            } 
            else if (computerChoice === 'PAPER') {
                 setTimeout(function(){
                     dialogText('My paper wrapped your rock!..HaHaHa!');
                     $('.rockIswrapped').show(1000);
                }, 700);
            
            }
            else if (computerChoice === 'SCISSOR') {
                setTimeout(function(){
                    dialogText('Oh no... your rock is too strong..please show some mercy!');
                    $('.rockBeatscissor').show(1000);    
                }, 700);           
            }
        }
        if (userInput === 'PAPER') {
            if (computerChoice === 'ROCK') {
                setTimeout(function(){
                    dialogText('I am struggling to make my rock to run away from your paper..');
                    $('.paperWraprock').show(1000);
                }, 700);
            }
            else if (computerChoice === 'PAPER') {
                setTimeout(function(){
                    dialogText('Two papers....what we can do with two papers...? Cannot even fight!');
                    $('.paperAndpaper').show(1000);
                }, 700);
            }
            else if(computerChoice === 'SCISSOR') {
                setTimeout(function(){
                    dialogText('Scissor..Scissor..I am going to cut cut cut!');
                    $('.scissorAttack').show(1000);    
                }, 700);
                             
            }
        }

        if (userInput === 'SCISSOR') {
            if (computerChoice === 'ROCK') {
                setTimeout(function(){
                     dialogText('My rock is much stronger than your scissor! What you gonna do ?');
                     $('.rockCrashuser').show(1000);
                }, 700);
            }
            else if (computerChoice === 'PAPER') {
                setTimeout(function(){
                    dialogText('No No No! Please do not cut my paper');
                    $('.beggingCat').show(1000);
                }, 700);
            }
            else if (computerChoice === 'SCISSOR') {
                setTimeout(function(){
                    dialogText('Both of us are scissor..How about be my friend? PEACE!');
                    $('.friend').show(1000);    
                }, 700);
            }
        }
        setTimeout(function(){
            $('.restart').show();
        }, 2000);
}


function userChoose(choice) {
    window.humanChoice = choice;

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
    window.computerChoice = choice;

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

    if (window.computerChoice === computerChoice){
        if(computerChoice === 'ROCK') {
            computerChoice = 'PAPER'
        }
        else if(computerChoice === 'PAPER') {
            computerChoice = 'SCISSOR'
        }
        else if(computerChoice === 'SCISSOR') {
            computerChoice = 'ROCK'
        }
    }

    if (window.humanChoice === humanChoice) {
        if (humanChoice === 'ROCK') {
            humanChoice = 'SCISSOR'
        }
        else if (humanChoice === 'PAPER') {
            humanChoice = 'ROCK'
        }
        else if (humanChoice === 'SCISSOR'){
            humanChoice = 'PAPER'
        }
    }
    computerChoose(computerChoice);
    userChoose(humanChoice);
}
    
$(document).ready(function(){
    setTimeout(function(){
        $('.cat,.boy').show(900);
        setTimeout(function(){$('.cat,.boy').hide();}, 600);
        $('.cat2,.boy2').show(1000);
        setTimeout(function(){$('.cat2,.boy2').hide();}, 900);

        $('.cat3,.boy3').show(2000);

        $('.restart').click(againClick);
        setTimeout(function(){
            $('.start').show();
        }, 3000);
        $('.start').click(function(){
            if (startButtonHasClicked) { return; }
            startButtonHasClicked = true;  
            $('#start-sound')[0].play(1000);
            setTimeout(function(){
                $('.BUTTON').show(1000);
            }, 2000);
            $('.start').fadeOut(1500);
            $('.graphic').fadeOut();
            window.showRandomInterval = setInterval(showRandom, 90);
        });       
}, 1000);

function againClick(){ 
    rockPaperScissorCalledBefore = false; //make the again call the function
    startButtonHasClicked = true;
    $('#again-sound')[0].play();
   $('.cinematic').hide(100);
   $('#dialog').hide(100);
   $('.restart').hide();
   window.showRandomInterval = setInterval(showRandom, 80);
}

});
