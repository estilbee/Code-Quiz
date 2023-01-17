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
var timeLeft = 15
var questionIndex = 0
var currentScore = 0
var timeInterval = 0
var nameInput = document.querySelector("#name-input")
var yourScore = document.querySelector("#yourscore")
var timerEl = document.getElementById('countdown')
var saveEl = document.querySelector("#save")
var highScoresArr = [];
var showHighScores = document.querySelector("#highscores")
var highScoreList = document.querySelector("#highscorelist")
var highScoreButton = document.querySelector("#high-score-button")

start.addEventListener("click", countdown)
highScoreButton.addEventListener("click",renderScoreData)


function countdown() {
    highScoreList.classList.add("hide")
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft = timeLeft - 1
            timerEl.textContent = timeLeft

        }

        else {
            clearInterval(timeInterval)
            renderScoreData()
            endScreen.classList.remove("hide")
            questionsDiv.classList.add("hide")
            showHighScores.textContent = "Your score is:" + currentScore
            nameInput.value
            yourScore = currentScore

            saveEl.addEventListener("click", function () {
                var name = nameInput.value
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


function renderScoreData() {
    // highScoreList.innerHTML = "";
    // highScoresArr.textContent = scoreData.length
    highScoresArr = []
    highScoresArr = JSON.parse(localStorage.getItem("highscores")) || []
    var scoreList = document.querySelector("#scoreList")
    scoreList.innerHTML = ""
    highScoreList.removeAttribute("class")
    for (var i = 0; i < highScoresArr.length; i++) {
        var highScores = highScoresArr[i];

        var li = document.createElement("li");
        li.textContent = "Name:" + highScores.name + " Score:" + highScores.score;
        li.setAttribute("data-index", i)
        scoreList.appendChild(li);

    }

}

function storedHighScores() {
    // store the highscores as a JSON string
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

    },

    {
        title: "What is the default behavior called that is used to move declarations to the top of the current scope?",
        choices: ["hoisting", "jumping", "sorting", "arranging"],
        answer: "hoisting"

    },

    {
        title: "Where is the JavaScript placed inside an HTML document or page?",
        choices: ["<footer> section", "<body> section", "<head> section", "<title> section"],
        answer: "<footer> section"

    },

    {
        title: "What are the CSS properties that are used to add space around sections of content?",
        choices: ["spacing", "cushion", "break", "padding"],
        answer: "padding"

    },

]



function addQuestion() {
    var currentQuestion = quizQuestions[questionIndex]
    questionChoices.innerHTML = ""
    questionTitle.textContent = currentQuestion.title
    currentQuestion.choices.forEach(function (index) {
        var choiceButton = document.createElement("button")
        choiceButton.textContent = index
        choiceButton.setAttribute("class", "btn btn-outline-secondary")
        choiceButton.setAttribute("value", index)
        choiceButton.onclick = checkQuestions
        // add click event that checks value and compares to answer
        questionChoices.append(choiceButton)
    })

}

function checkQuestions() {
    if (this.value === quizQuestions[questionIndex].answer) {
        questionResults.textContent = "correct!"
        //wait 2 seconds and then remove correct
        setTimeout(function () {
            questionResults.textContent = ""
        }, 2000);

        currentScore = currentScore + 5
        console.log(currentScore)
    }
    else {
        questionResults.textContent = "incorrect!"
        setTimeout(function () {
            questionResults.textContent = ""
        }, 2000);
        timeLeft = timeLeft - 2
        timerEl.textContent = timeLeft
    }
    questionIndex++
    addQuestion()

}


