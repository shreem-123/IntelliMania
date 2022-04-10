// Questions will be asked
const Questions = [{
    id: 0,
    q: "The popular BTS band belongs to which country?",
    a: [{ text: "North Korea", isCorrect: false },
        { text: "China", isCorrect: false },
        { text: "South Korea", isCorrect: true },
        { text: "Germany", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The famous Indian singer , composer who left too early?",
    a: [{ text: "Shekhar Suman", isCorrect: false, isSelected: false },
        { text: "Vishal", isCorrect: false },
        { text: "Bappi Lahiri", isCorrect: true },
        { text: "Andy Murray", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Nightingale of India?",
    a: [{ text: "Shreya Ghoshal", isCorrect: false },
        { text: "Neha Kakkar", isCorrect: false },
        { text: "Lata Mangeshkar", isCorrect: true },
        { text: "Alka Yagnik", isCorrect: false }
    ]

},
{
    id: 3,
    q: "The patriotic song 'Maa Tujhe Salaam' was sung by?",
    a: [{ text: "Shaan", isCorrect: false },
        { text: "A.R.Rehman", isCorrect: true },
        { text: "Kailash Kher", isCorrect: false },
        { text: "Shankar Mahadevan", isCorrect: false }
    ]

},
{
    id: 4,
    q: "The song 'Manike Mage Hithe' is written in which language?",
    a: [{ text: "Tamil", isCorrect: false },
        { text: "Kannada", isCorrect: false },
        { text: "Telugu", isCorrect:false },
        { text: "Sri Lankan", isCorrect: true }
    ]

}

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
