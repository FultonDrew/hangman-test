
var start = document.getElementById('startButton');
var hint = document.getElementById('hintButton');
var body = document.getElementById('body');
var gameBoard = document.getElementById('gameBoard');
var submit = document.getElementById('submitButton');
var input = document.getElementById('input');
var usedBox = document.getElementById('usedBox');
var usedLetters = [];
var startTheGame = 0;

start.addEventListener("click", function(){
    startGame();
    startTheGame ++;
    console.log('game started');
});

var w1 = {word: "apple", hint: "adam shouldn't have eaten it"}
var w2 = {word: 'banana', hint: "donkey kong's favorite food"}
var w3 = {word: 'orange', hint: "named after a color"}
var w4 = {word: 'grape', hint: "these are 'bunches' of fun"}
var w5 = {word: 'canteloupe', hint: "the pessimistic melon"}
var w6 = {word: 'watermelon', hint: "don't eat its seeds"}
var w7 = {word: 'apricot', hint: "good luck"}
var w8 = {word: 'mango', hint: "you likely had it in your smoothie this morning"}
var w9 = {word: 'starfruit', hint: "from outter space"}
var w10 = {word: 'dragonfruit', hint: "breathes fire"}
var w11 = {word: 'tangerine', hint: "oranges little brother"}
var w12 = {word: 'lemon', hint: "Sprites main ingredient"}
var w13 = {word: 'kiwi', hint: "An australian neighbor"}
var w14 = {word: 'blueberry', hint: "You're blowing up like a balloon, like a ___"}
var w15 = {word: 'rasberry', hint: "Kids put them on their fingers"}
var w16 = {word: 'blackberry', hint: "A bigger, better rasberry"}
var w17 = {word: 'peach', hint: "Mario's princess"}
var w18 = {word: 'lime', hint: "Small green lemon"}
var w19 = {word: 'cherry', hint: "Delicious with a pit"}
var w20 = {word: 'plum', hint: "Purple Peach"}




var listOfWords = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13,w14,w15,w16,w17,w18,w19,w20];
// var listOfHints = [s1.hint, s2.hint, s3.hint, s4.hint, s5.hint, s6.hint, s7.hint, s8.hint, s9.hint, s10.hint, s11.hint, s12.hint, s13.hint];
console.log(listOfWords)
// console.log(listOfHints)
var randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
console.log(randomWord)
var counter = 0;
var answerArray = [];
var remainingLetters = randomWord.word.length;

function startGame(){
  //on start button, creates a container box which holds each letter of the word to guess
      var container = document.createElement("div");
      container.id = 'brickContainer';
      container.className = "brickContainer";
      container.style.border = "2px solid black";
      container.style.borderRadius = "5px"
      container.style.width = "300px*randomWord.word.length";
      container.style.height = "50px*randomWord.word.length";
      container.style.display = "inline-block";
      container.style.margin = "60px 10px 0 10px";
      container.style.marginLeft = "10%";
      container.style.backgroundColor = "#E5D0C4"
      container.style.boxShadow = "2px 2px 2px"
      container.style.overflow = "hidden"

      gameBoard.appendChild(container);

      //on start button, creates a box for each letter of the word to guess
  for (let i = 0; i < randomWord.word.length;i++){
      var brick = document.createElement("div");
      brick.id = "brick"+[i];
      brick.className = "brick";
      container.appendChild(brick)[i]
      brick.style.border = "2px solid black";
      brick.style.width = "100px";
      brick.style.height = "100px";
      brick.style.display = "inline-block";
      brick.style.margin = "15px"
      // brick.style.marginLeft = "10px"
      brick.style.fontSize = "5em"
      brick.style.textAlign = "center"
      brick.style.overflow = "hidden"
      
}
    

    //adds a box to collect all of the used letters
      var letterContainer = document.createElement("div");
      letterContainer.id = "letterContainer";
      usedBox.appendChild(letterContainer)
      letterContainer.style.border = "2px solid black";
      letterContainer.style.width = "400px";
      letterContainer.style.height = "200px";
      letterContainer.style.display = "inline-block";
      letterContainer.style.margin = "10px 10px 0 300px"
      letterContainer.style.backgroundColor = "white";
      letterContainer.style.fontSize = "4em"
      letterContainer.style.textAlign = "center"

//adds a hint box
      var hintContainer = document.createElement("div");
      hintContainer.id = "hintContainer";
      hintBox.appendChild(hintContainer);
      
      hintContainer.style.width = "300px*randomWord.hint.length";
      hintContainer.style.height = "200px*randomWord.hint.length";
      hintContainer.style.display = "inline-block";
      hintContainer.style.margin = "100px 10px 0 400px"
      hintContainer.style.padding = "10px"
      hintContainer.style.backgroundColor = "lightgrey";
      hintContainer.style.fontSize = "1.5em"
      hintContainer.style.textAlign = "center"




  //if player hits 'start game' while playing, this will refresh the page to start again
      if(startTheGame == 1){
        alert('Oops, you started the game one-too-many times!')
          document.location.reload() 
        }
};





function inputGuess(){
  var guess = input.value.toLowerCase();
  if(guess.length !== 1) {
    alert("please enter a single letter");
  } else {
    console.log(guess);
    let wrongletter = false;
    for (let j = 0; j<randomWord.word.length; j++) {
      
      if (randomWord.word[j] === guess) {
            answerArray.push(guess)+ "-";
            console.log(answerArray)
            document.getElementById('brick'+[j]).innerHTML = guess;
            console.log('hello')
            wrongletter = true
            remainingLetters--;
            console.log(remainingLetters)
        
      }
    }
      if ( wrongletter == false){
        counter ++
        console.log('whatevers')
        }
            if(counter === randomWord.length+4){
            console.log('gameover')
            alert("Game over");
          }
        if(remainingLetters === 0){
          alert("Good job! The answer was " + randomWord);
          }
          usedLetters.push(guess);
          document.getElementById('letterContainer').innerHTML = usedLetters + " ";


      }
  }





submit.addEventListener('click', function (){
    inputGuess();
    input.value = "";
    console.log('guessLogged');
});

function getHint(){
  hintContainer.innerHTML = randomWord.hint;
        
  }

hint.addEventListener("click", function(){
    getHint();
    hintContainer.style.border = "2px solid black";
});

