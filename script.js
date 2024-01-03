const questions = [{
        question: "what is 2+2?",
        answer: [{
                text: "3",
                correct: false
            },
            {
                text: "1",
                correct: false
            },
            {
                text: "5",
                correct: false
            },
            {
                text: "4",
                correct: true
            }
        ]
    },
    {
        question: "what is 9*2?",
        answer: [{
                text: "6",
                correct: false
            },
            {
                text: "12",
                correct: false
            },
            {
                text: "18",
                correct: true
            },
            {
                text: "20",
                correct: false
            }
        ]
    },
    {
        question: "what is 12/2?",
        answer: [{
                text: "5",
                correct: false
            },
            {
                text: "2",
                correct: true
            },
            {
                text: "10",
                correct: false
            },
            {
                text: "4",
                correct: false
            }
        ]
    },
    {
        question: "what is 20-5?",
        answer: [{
                text: "10",
                correct: false
            },
            {
                text: "15",
                correct: true
            },
            {
                text: "5",
                correct: false
            },
            {
                text: "9",
                correct: false
            }
        ]
    },
    {
        question: "what is 7+12?",
        answer: [{
                text: "10",
                correct: false
            },
            {
                text: "19",
                correct: true
            },
            {
                text: "13",
                correct: false
            },
            {
                text: "15",
                correct: false
            }
        ]
    },
    {
        question: "what is 12+20?",
        answer: [{
                text: "30",
                correct: false
            },
            {
                text: "28",
                correct: false
            },
            {
                text: "32",
                correct: true
            },
            {
                text: "4",
                correct: false
            }
        ]
    },
    {
        question: "what is 8*9?",
        answer: [{
                text: "72",
                correct: true
            },
            {
                text: "55",
                correct: false
            },
            {
                text: "64",
                correct: false
            },
            {
                text: "40",
                correct: false
            }
        ]
    },
    {
        question: "what is 70/10?",
        answer: [{
                text: "10",
                correct: false
            },
            {
                text: "7",
                correct: true
            },
            {
                text: "8",
                correct: false
            },
            {
                text: "9",
                correct: false
            }
        ]
    },
    {
        question: "what is 5*6?",
        answer: [{
                text: "40",
                correct: false
            },
            {
                text: "30",
                correct: true
            },
            {
                text: "35",
                correct: false
            },
            {
                text: "20",
                correct: false
            }
        ]
    }


];

const question_no = document.getElementById("questions");
const answer_buttons = document.getElementById("answer-buttons");
const next_buttons = document.getElementById("next-button");
const que_no = document.getElementsByClassName("question-no");
const total_score_display = document.getElementsByClassName("questions-problem");
const score_display = document.getElementById("score-display");
const score_last_display = document.getElementById("total-score-display");
const start_Quiz = document.getElementById("start-quiz")
let CurrentQuestionIndex = 0;
let score = 0;






function startQuiz() {
    CurrentQuestionIndex = 0;
    score = 5;

    next_buttons.innerHTML = "Next";
    que_no.innerHTML = `Question 0/${questions.length}`
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[CurrentQuestionIndex];
    let questionNo = CurrentQuestionIndex + 1;
    question_no.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answer_buttons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {

    next_buttons.style.display = "none";
    while (answer_buttons.firstChild) {
        answer_buttons.removeChild(answer_buttons.firstChild)

    }
}
const buttonCenter = document.getElementsByClassName("button-center")

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score = score + 5;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answer_buttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        } else {
            button.disabled = true;
        }
    })
    next_buttons.style.display = "block";
}
const que = document.getElementById("que-no");

function showScore() {
    resetState();
    score_last_display.style.margin = "60px"
    score_last_display.innerHTML = `Your Score: ${score}/${questions.length*5}`;
    next_buttons.innerHTML = "play again"
    next_buttons.style.display = "block"

}

function handleNextButton() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < questions.length) {
        showQuestions();
        que.innerHTML = `Question ${CurrentQuestionIndex}/${questions.length-1}`;
        score_display.innerHTML = `Score: ${score}`


    } else {
        question_no.remove();
        showScore();
    }
}

next_buttons.addEventListener("click", () => {
    if (CurrentQuestionIndex < questions.length) {
        handleNextButton();
    } else {

    }
})
startQuiz();