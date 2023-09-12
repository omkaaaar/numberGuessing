let guessNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('Enter Number!');

    }
    else if (guess === guessNum) {
        displayMessage("😍 You Win!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = guessNum;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    // GUESSES
    else if (guess !== guessNum) {
        if (score > 1) {
            displayMessage(guess > guessNum ? `🤦‍♂️ Too High!` : `🤷‍♂️ Too low`);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(`Game over!`);
            document.querySelector('.score').textContent = 0;
        }
    }

    // else if (guess < guessNum) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = `Too low!`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = `Game over!`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
});


// Again button functionality
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    guessNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Gueessing the number');
    document.querySelector('body').style.backgroundColor = '#749BC2';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
})
