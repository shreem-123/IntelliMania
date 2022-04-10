// Questions will be asked
const Questions = [{
    id: 0,
    q: "Balbir Singh Junior, who died recently is associated with which sport?",
    a: [{ text: "Cricket", isCorrect: false },
        { text: "Tennis", isCorrect: false },
        { text: "Hockey", isCorrect: true },
        { text: "Kabaddi", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which player has clinched the 12th Barcelona Open title in tennis?",
    a: [{ text: "Rafeal Nadal", isCorrect: true, isSelected: false },
        { text: "Roger Federar", isCorrect: false },
        { text: "Novak Djokovic", isCorrect: false },
        { text: "Andy Murray", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Who is the first player in the last 52 years to win all four Grand Slams twice?",
    a: [{ text: "Roger Federar", isCorrect: false },
        { text: "Rafeal Nadal", isCorrect: false },
        { text: "Novak Djokovic", isCorrect: true },
        { text: "Stefanos Tsitsipas", isCorrect: false }
    ]

},
{
    id: 3,
    q: "How many participants are part of India’s Olympic contingent for Tokyo 2021?",
    a: [{ text: "100", isCorrect: false },
        { text: "127", isCorrect: true },
        { text: "400", isCorrect: false },
        { text: "550", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Who won the gold medal in women’s singles badminton at Tokyo Olympics ?",
    a: [{ text: "Grey Polii", isCorrect: false },
        { text: "PV Sindhu", isCorrect: false },
        { text: "Tai Tzu-ying", isCorrect:false },
        { text: "Chen Yufei", isCorrect: true }
    ]

},

];

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
});

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
});

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
});

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
});

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
});
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}

});
