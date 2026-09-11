let questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],

        correct: 0
    },

    {
        question: "Which language is used to style a website?",

        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],

        correct: 1
    },

    {
        question: "Which language makes a website interactive?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "C++"
        ],

        correct: 2
    },

    {
        question: "Which symbol is used to select an ID in CSS?",

        options: [
            ".",
            "#",
            "*",
            "&"
        ],

        correct: 1
    }

];


let currentQuestion = 0;
let score = 0;


let questionElement = document.getElementById("question");

let optionButtons = document.querySelectorAll(".option");

let nextButton = document.getElementById("nextBtn");

let scoreElement = document.getElementById("score");


// Show Question

function showQuestion() {

    let current = questions[currentQuestion];

    questionElement.innerHTML = current.question;


    for (let i = 0; i < optionButtons.length; i++) {

        optionButtons[i].innerHTML = current.options[i];

    }

}


// Check Answer

for (let i = 0; i < optionButtons.length; i++) {

    optionButtons[i].onclick = function () {

        let selectedAnswer = i;

        if (selectedAnswer === questions[currentQuestion].correct) {

            score++;

            scoreElement.innerHTML = "Correct!";

        }

        else {

            scoreElement.innerHTML = "Wrong answer";

        }

    };

}


// Next Question

nextButton.onclick = function () {

    currentQuestion++;

    scoreElement.innerHTML = "";


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        questionElement.innerHTML = "Quiz Completed! 🎉";

        document.querySelector(".options").style.display = "none";

        nextButton.style.display = "none";

        scoreElement.innerHTML =
            "Your final score is: " + score +
            " / " + questions.length;

    }

};


// Start Quiz

showQuestion();