// Questions will be asked
const Questions = [{
    id: 0,
    q: "‘Desh ke Mentor’ is a new scheme announced by which Indian state?",
    a: [{ text: "Gujarat", isCorrect: false },
        { text: "New Delhi", isCorrect: true },
        { text: "Mizoram", isCorrect: false },
        { text: "Rajasthan", isCorrect: false }
    ]

},
{
    id: 1,
    q: "As per the data from the Reserve Bank of India, which bank recorded the highest value of frauds in April-December 2021?",
    a: [{ text: "State bank of India", isCorrect: false, isSelected: false },
        { text: "Punjab National Bank", isCorrect: true },
        { text: "Bank of India", isCorrect: false },
        { text: "Bank of Baroda", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Utkal Diwas, celebrated on April 1, is the foundation day of which Indian state?",
    a: [{ text: "Andhra Pradesh", isCorrect: false },
        { text: "Odisha", isCorrect: true },
        { text: "West Bengal", isCorrect: false },
        { text: "Gujarat", isCorrect: false }
    ]

},
{
    id: 3,
    q: "India signed a MoU with which country to set up Maritime Rescue Co-ordination Centre (MRCC)?",
    a: [{ text: "Japan", isCorrect: false },
        { text: "Nepal", isCorrect: false },
        { text: "Sri Lanka", isCorrect: true },
        { text: "Bangladesh", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Which Union Ministry is associated with the Foreign Trade Policy of India?",
    a: [{ text: "Ministry of External Affairs", isCorrect: false },
        { text: "Ministry of Commerce and Industries", isCorrect: true },
        { text: "Ministry of MSME", isCorrect:false },
        { text: "Ministry of Home Affairs", isCorrect: false }
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
