const possibleAnswers = ['a','b','c','d','e','f','g','h','i',
      'j','k','l','m','n','o','p', 'q','r',
      's','t','u','v','w','x','y','z'];

    let wins = 0;
    let losses = 0;
    let chances = 9;
    
    let guesses = [];
    
    function getNewAnswer(){
      let randomIndex = Math.floor(Math.random() * possibleAnswers.length);
      return possibleAnswers[randomIndex];
    }
	let answer = getNewAnswer();

    document.addEventListener("keydown", processGuess);

    function processGuess(event){
      const userGuess = event.key.toLowerCase();

      if (/^[a-z]+$/.test(userGuess) && guesses.indexOf(userGuess) == -1) {
        guesses.push(userGuess);

        if (userGuess === answer) {
          wins++;
          chances = 9;
          guesses.length = 0; 
          answer = getNewAnswer();
        } else if (chances === 1) {
          losses++;
          chances = 9;
          guesses.length = 0;
          answer = getNewAnswer();
        } else if (userGuess !== answer) {
          chances--;
        }

        let html = `<p>Your Guesses so far: </p> 
          <p> ${guesses.join(", ")} </p> 
          <p>wins: ${wins} </p> 
          <p>losses: ${losses} </p> 
          <p>chances left: ${chances} </p>`;
        document.querySelector("#currentSituation").innerHTML = html;
      }
    }