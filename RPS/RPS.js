function rockPaperScissor(userInput) {
        var computerChoice = Math.floor(Math.random() * 3) + 1;
        var userChoice = userInput.toUpperCase();
        var userChoice2;

        if (userChoice === 'ROCK') {
            userChoice2 = 1;
        }
        else if (userChoice === 'PAPER') {
            userChoice2 = 2;
        }
        else if (userChoice === 'SCISSOR') {
            userChoice2 = 3;
        }
        if (userChoice2 === 1 ) {
            if (computerChoice === 1) {
                document.write('<h1>Rock to rock...Seems we need to fight more to see who is winner</h1>');
            } 
            else if (computerChoice === 2) {
                document.write('<h1>My paper wrapped your rock!..HaHaHa!</h1>');
            }
            else if (computerChoice === 3) {
                document.write('<h1>Oh no... your rock is too strong..please show some mercy!</h1>');
            }
        }
        if (userChoice2 === 2) {
            if (computerChoice === 1) {
                document.write('<h1>I am struggling to make my rock to run away from your paper..</h1>');
            }
            else if (computerChoice === 2) {
                document.write('<h1>Two papers....what we can do with two papers...? Cannot even fight!</h1>');
            }
            else if(computerChoice === 3) {
                document.write('<h1>Scissor..Scissor..I am going to cut cut cut!</h1>');
            }
        }
        if (userChoice2 === 3) {
            if (computerChoice === 1) {
                document.write('<h1>My rock is much stronger than your scissor! What you gonna do ?</h1>');
            }
            else if (computerChoice === 2) {
                document.write('<h1>No No No! Please do not cut my paper</h1>');
            }
            else if (computerChoice === 3) {
                document.write('<h1>Both of us are scissor..How about be my friend? PEACE!</h1>');
            }
        }
}