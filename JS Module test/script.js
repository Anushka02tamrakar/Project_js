var showRulesBtn = document.querySelector('.rulebutton');
var gameRules = document.querySelector('.rules-page');
var exitBtn = document.getElementById('exit');

    showRulesBtn.addEventListener('click', function () {
        // Toggle the visibility of the rules
        gameRules.classList.toggle("open")

    });
    exitBtn.addEventListener('click', function () {
        // Toggle the visibility of the rules
        gameRules.classList.toggle("open")

    });

    
      // Function to handle user's choice and initiate the game
      function click(userChoice) {
        // Display the user's choice
        document.getElementById('usertagline').innerText = 'You chose ' + userChoice;
    
        // Get the computer's random choice
        const choices = ['stone', 'paper', 'scissor'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
    
        // Display the computer's choice
        document.getElementById('pctagline').innerText = 'Computer chose ' + computerChoice;
    
        // Determine the winner and update the scores
        const result = getResult(userChoice, computerChoice);
        updateScore(result);
      }
    
      // Function to determine the winner based on choices
      function getResult(user, computer) {
        if (user === computer) {
          return 'draw';
        } else if (
          (user === 'stone' && computer === 'scissor') ||
          (user === 'scissor' && computer === 'paper') ||
          (user === 'paper' && computer === 'stone')
        ) {
          return 'user';
        } else {
          return 'computer';
        }
      }
    
      // Function to update the scores and display the result
      function updateScore(result) {
        const userScoreElement = document.getElementById('user-score');
        const computerScoreElement = document.getElementById('pc-score');
    
        // Update scores based on the result
        if (result === 'user') {
          userScoreElement.innerText = parseInt(userScoreElement.innerText) + 1;
          document.getElementById('head1').innerText = 'You Win';
          document.getElementById('head2').innerText = 'Against PC';
        } else if (result === 'computer') {
          computerScoreElement.innerText = parseInt(computerScoreElement.innerText) + 1;
          document.getElementById('head1').innerText = 'You Lose';
          document.getElementById('head2').innerText = 'Against PC';
        } else {
          document.getElementById('head1').innerText = 'It\'s a Draw';
          document.getElementById('head2').innerText = '';
        }
    
        // Show the result screen
        document.querySelector('.resultScreen').style.display = 'block';
      }
    
      // Function to play the game again
      function playagain() {
        // Reset taglines and hide the result screen
        document.getElementById('usertagline').innerText = '';
        document.getElementById('pctagline').innerText = '';
        document.querySelector('.resultScreen').style.display = 'none';
      }

    


