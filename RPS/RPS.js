function rockPaperScissor(userInput) {
        var choices = ['ROCK', 'PAPER', 'SCISSOR'];
        var computerChoice = choices[ Math.floor(Math.random() * 3) ];

        computerChoose(computerChoice);
        userChoose(userInput);

        if (userInput === 'ROCK' ) {
            if (computerChoice === 'ROCK') {
                dialogText('Rock to rock...Seems we need to fight more to see who is winner');
            } 
            else if (computerChoice === 'PAPER') {
                dialogText('My paper wrapped your rock!..HaHaHa!');
            }
            else if (computerChoice === 'SCISSOR') {
                dialogText('Oh no... your rock is too strong..please show some mercy!');
            }
        }
        if (userInput === 'PAPER') {
            if (computerChoice === 'ROCK') {
                dialogText('I am struggling to make my rock to run away from your paper..');
            }
            else if (computerChoice === 'PAPER') {
                dialogText('Two papers....what we can do with two papers...? Cannot even fight!');
            }
            else if(computerChoice === 'SCISSOR') {
                dialogText('Scissor..Scissor..I am going to cut cut cut!');
            }
        }
        if (userInput === 'SCISSOR') {
            if (computerChoice === 'ROCK') {
                dialogText('My rock is much stronger than your scissor! What you gonna do ?');
            }
            else if (computerChoice === 'PAPER') {
                dialogText('No No No! Please do not cut my paper');
            }
            else if (computerChoice === 'SCISSOR') {
                dialogText('Both of us are scissor..How about be my friend? PEACE!');
            }
        }
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
    $('#dialog').text(text).show();
}

function showRandom(){
    var choices = ['ROCK', 'PAPER', 'SCISSOR'];
    var computerChoice = choices[ Math.floor(Math.random() * 3) ];
    var humanChoice = choices[ Math.floor(Math.random() * 3) ];
    computerChoose(computerChoice);
    userChoose  (humanChoice);
}

setTimeout(function(){
    $('#r').animate({
        'top': '150px',
        'left': '150px'
    }, 500)
}, 1000)

setTimeout(function(){
    $('#r').animate({
        'top': '300px',
        'left': '300px'
    }, 500)
}, 2000)

setTimeout(function(){
    $('#r').animate({
        'width':'200px',
        'height':'200px'
    }, 500)
}, 3000)