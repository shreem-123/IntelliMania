// Questions will be asked
const Questions = [
    {
      id: 0,
      q: "For the year 2022 who has won the best actor award in the Oscars?",
      a: [
        { text: "Chris Rock", isCorrect: false },
        { text: "Will Smith", isCorrect: true },
        { text: "Andrew Garfield", isCorrect: false },
        { text: "Benedict Cumberbatch", isCorrect: false },
      ],
    },
    {
      id: 1,
      q: "Best Animated Feature for the Year 2022 in Oscars",
      a: [
        { text: "Encanto", isCorrect: true, isSelected: true },
        { text: "Raya and the last Dragon", isCorrect: false },
        { text: "Luca", isCorrect: false },
        { text: "Flee", isCorrect: false },
      ],
    },
    {
      id: 2,
      q: "Who is the Director of the movie “Titanic”",
      a: [
        { text: "Christopher Nolan", isCorrect: false },
        { text: "James Cameron", isCorrect: true },
        { text: "Quentin Tarantino", isCorrect: false },
        { text: "Steven Speilberg", isCorrect: false },
      ],
    },
    {
      id: 3,
      q: "Who is the Director of the Bollywood Movie “3 Idiots”?",
      a: [
        { text: "Rohit Shetty", isCorrect: false },
        { text: "Karan Johar", isCorrect: false },
        { text: "Anurag Kashyap", isCorrect: false },
        { text: "Rajkumar Hirani", isCorrect: true },
      ],
    },
    {
      id: 4,
      q: "Director of the film Suryavanshi",
      a: [
        { text: "Karan Johar", isCorrect: false },
        { text: "James Cameron", isCorrect: false },
        { text: "Rohit Shetty", isCorrect: true },
        { text: "Anurag Kashyap", isCorrect: false },
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
    if (id < 2) {
      id++;
      iterate(id);
      console.log(id);
    }
  });
  