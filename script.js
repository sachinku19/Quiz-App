let arr = [
  {
    question: "What is the capital of India?",
    options: ["London", "France", "Delhi", "Bihar"],
    answer: "Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Wordsworth",
      "William Shakespeare",
      "John Keats",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
];

let que = document.getElementById("question");
let count = 0;
let selectedOptions = new Array(arr.length).fill(null);

function showquestion() {
  que.innerHTML = arr[count].question;
  for (let i = 0; i < arr[count].options.length; i++) {
    let opt = document.getElementById("opt" + i);
    opt.innerHTML = arr[count].options[i];
    opt.style.backgroundColor = "#e0f7fa";
    opt.style.color = "black";
    opt.style.pointerEvents = "auto";
    opt.onclick = function () {
      selectopt(i);
    };
  }

  if (selectedOptions[count] !== null) {
    selectopt(selectedOptions[count]);
  }
}

function selectopt(index) {
  selectedOptions[count] = index;
  for (let i = 0; i < arr[count].options.length; i++) {
    let opt = document.getElementById("opt" + i);
    if (i === index) {
      if (arr[count].options[i] === arr[count].answer) {
        opt.style.backgroundColor = "#4CAF50";
        opt.style.color = "white";
      } else {
        opt.style.backgroundColor = "#f44336";
        opt.style.color = "white";
      }
    } else {
      opt.style.backgroundColor = "#e0f7fa";
      opt.style.color = "black";
    }
    opt.style.pointerEvents = "none";
  }
}

function prev() {
  if (count > 0) {
    count--;
    showquestion();
  }
}

function nextQuestion() {
  if (count < arr.length - 1) {
    count++;
    showquestion();
  } else {
    alert("You have reached the last question!");
  }
}

function submit() {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (selectedOptions[i] !== null && arr[i].options[selectedOptions[i]] === arr[i].answer) {
      score++;
    }
  }
  let resultbox = document.getElementById("resultBox");
  let total = arr.length;
  let per = (score / total) * 100;

  if (per >= 50) {
    resultbox.innerHTML = `🎉 Passed! You scored ${score} / ${total} (${per.toFixed(2)}%)`;
    resultbox.style.color = "limegreen";
  } else {
    resultbox.innerHTML = `❌ Failed! You scored ${score} / ${total} (${per.toFixed(2)}%)`;
    resultbox.style.color = "red";
  }
}

showquestion();
