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


//need a collection of objects that hold the questions
var questionsDiv = document.querySelector("#questionsDiv")
var questionTitle = document.querySelector("#questionTitle")
var questionChoices = document.querySelector("#questionChoices")
var endScreen = document.querySelector("#endScreen")
var start = document.querySelector("#start")
var timeLeft = 25
var questionIndex = 0

//need to keep a count of the question that is displayed 
//need to keep score

//need to keep the time 
var timerEl = document.getElementById('countdown')


//for all the buttons, add eventListener 
start.addEventListener("click", countdown)

function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft = timeLeft - 1
            timerEl.textContent = timeLeft

        }
    }, 1000)
    start.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")
    addQuestion()
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
    console.log("correct!")
 }
else {
    console.log("incorrect!")
    timeLeft = timeLeft -2
    timerEl.textContent= timeLeft
}
questionIndex ++ 
addQuestion()
}



//modify the text/attributes
//modify one of the attributes to say right or wrong 

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


//when I click the start button
function startQuiz() {
    //Timer starts and i am presented with a question 
    //need a function call to start the timer 

    //need a function call to present the question 
}

//eventListener here // when i click the start button
