//ACCEPTANCE CRITERIA
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


var questionsDiv = document.querySelector("#questionsDiv")
var questionTitle = document.querySelector("#questionTitle")
var questionChoices = document.querySelector("#questionChoices")
var endScreen = document.querySelector("#endScreen")
var start = document.querySelector("#start")
var questionResults = document.querySelector("#question-results")
var timeLeft = 5
var questionIndex = 0
var currentScore = 0
var timeInterval = 0
var nameInput = document.querySelector("#name-input")
var yourScore = document.querySelector("#yourscore")
var timerEl = document.getElementById('countdown')
var saveEl = document.querySelector("#save")
var highScoresArr = [];

 
start.addEventListener("click", countdown)

function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft = timeLeft - 1
            timerEl.textContent = timeLeft

        }
        else {
            //need function: enter name for highscore once time is up
            endScreen.classList.remove("hide")
            questionsDiv.classList.add("hide")
            nameInput.value
            yourScore = currentScore
            saveEl.addEventListener("click", function(){
                var name= nameInput.value
                console.log(name)
                var scoreData = {
                    name: nameInput.value, 
                    score: yourScore
                }
                            highScoresArr.push(scoreData);
                    storedHighScores()
            })
        }
        
    }, 1000)
    start.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")
    addQuestion()
}

// starts our todo list
function init() {
    // gets the stored todo list from localstorage and puts it into a variable
    var storeHighScores= JSON.parse(localStorage.getItem("highscores"));
    // just make we have data before we try to use it as a list, otherwise, todos will stay empty like above
    if (storeHighScores !== null) {
      highScoresArr = storeHighScores;
    }
    // calls renderTodos, allows you to run lines 10-27, so we can see the todos on the page
//     renderTodos();
}
  
  function storedHighScores() {
    // store the todos as a JSON string
    localStorage.setItem("highscores", JSON.stringify(highScoresArr));
  }


var quizQuestions = [

    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"

    }



]



function addQuestion() {
  var currentQuestion = quizQuestions[questionIndex]
  questionChoices.innerHTML=""
  questionTitle.textContent= currentQuestion.title
currentQuestion.choices.forEach(function(index){
    var choiceButton = document.createElement("button")
    choiceButton.textContent= index
    choiceButton.setAttribute("class", "buttonStyle" )
    choiceButton.setAttribute("value", index)
    choiceButton.onclick= checkQuestions
// add click event that checks value and compares to answer
    questionChoices.append(choiceButton)
})

}

function checkQuestions(){
 if (this.value === quizQuestions[questionIndex].answer){
    questionResults.textContent="correct!" 
    //wait 2 seconds and then remove correct
    setTimeout(function() {
        questionResults.textContent="" 
    }, 2000);

    currentScore = currentScore + 5
    console.log(currentScore)
 }
else {
    questionResults.textContent="incorrect!" 
    setTimeout(function() {
        questionResults.textContent="" 
    }, 2000);
    timeLeft = timeLeft -2
    timerEl.textContent= timeLeft
}
questionIndex ++ 
addQuestion()

}



//modify the text/attributes

//append all elements to something on the page



//WHEN i answer a questions 
//if answered correctly
//add points 
//Show as correct
//THEN i am presented with another question 
//WHEN i answer the question incorrectly 
//THEN time is subtracted from the clock

//after the answer, 
//THEN i am presented with another questions 
//add points


//if there are no other questions.
//go to highscore screen 
