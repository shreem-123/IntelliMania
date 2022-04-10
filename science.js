// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Which famous British physicist wrote A Brief History of Time?",
    a: [
      { text: "Stephen hawking", isCorrect: true },
      { text: "Sir Issac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: false },
      { text: "Dr.C.V. Raman", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "The chairman of India first Atomic Energy Commission of India",
    a: [
      { text: "Dr. Homi J. Bhabha", isCorrect: true, isSelected: true },
      { text: "Vikram Sarabhai", isCorrect: false },
      { text: "Dr. C.V. Raman", isCorrect: false },
      { text: "dr. A.P.J.Abdul Kalam", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Where was the first rocket was launched in India",
    a: [
      { text: "Shriharikota", isCorrect: false },
      { text: "Thumba near Thiruvananthapuram, Kerala", isCorrect: true },
      { text: "Auburn, Massachusetts", isCorrect: false },
      { text: "Delhi", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "What is the full frm Of ISRO”",
    a: [
      { text: "Italian Research Space Organization", isCorrect: false },
      { text: "Indian Research Space Organization", isCorrect: true },
      { text: "Ireland Research Space Organization", isCorrect: false },
      { text: "Indian Reasearch And Space Oraganization", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "What is the most common chemical element in the universe?",
    a: [
      { text: "Hydrogen", isCorrect: true },
      { text: "Oxygen", isCorrect: false },
      { text: "Ozone", isCorrect: false },
      { text: "Copper", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Which substance in the skin filters out harmful light from the Sun?",
    a: [
      { text: "Protein", isCorrect: false },
      { text: "Aderaline", isCorrect: false },
      { text: "Nicotine", isCorrect: false },
      { text: "Melanin", isCorrect: true },
    ],
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
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

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
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
  }
});
