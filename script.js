// --- 100 Question Pool Example ---
const splashScreen = document.getElementById('splash-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');

startQuizBtn.addEventListener('click', () => {
  splashScreen.classList.add('inactive');
  setTimeout(() => {
    splashScreen.style.display = 'none';
    startQuiz();
  }, 700); // 0.7s matches CSS transition
});

// Remove window.onload = startQuiz;
// Instead, quiz ab splash ke baad start hoga

const questionPool = [
  { 
    question: "What is the capital of France?", 
    options: ["London", "Berlin", "Paris", "Madrid"], 
    answer: 2 
},
  { 
    question: "Which language runs in a web browser?", 
    options: ["Java", "C", "Python", "JavaScript"], 
    answer: 3 
},
  { 
    question: "What does CSS stand for?", 
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"], 
    answer: 1 
},
  { 
    question: "Which year was JavaScript launched?", 
    options: ["1996", "1995", "1994", "None of the above"], 
    answer: 1 
},
  { 
    question: "Who is making the Web standards?", 
    options: ["Mozilla", "Microsoft", "The World Wide Web Consortium", "Google"], 
    answer: 2 
},
  { 
    question: "What is the largest planet in our solar system?", 
    options: ["Earth", "Jupiter", "Mars", "Saturn"], 
    answer: 1 
},
  { 
    question: "What is the boiling point of water?", 
    options: ["90°C", "100°C", "110°C", "120°C"], 
    answer: 1 
},
  { 
    question: "Which element has the chemical symbol 'O'?", 
    options: ["Gold", "Oxygen", "Silver", "Iron"], 
    answer: 1 
},
  { 
    question: "Who wrote 'Romeo and Juliet'?", 
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], 
    answer: 1 
},
  { 
    question: "What is the hardest natural substance?", 
    options: ["Gold", "Iron", "Diamond", "Silver"], 
    answer: 2 
},
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },
  {
    question: "Who invented the light bulb?",
    options: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
    answer: 2
  },
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "What is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: 1
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: 2
  },
  {
    question: "Who was the first person to walk on the moon?",
    options: ["Yuri Gagarin", "Buzz Aldrin", "Michael Collins", "Neil Armstrong"],
    answer: 3
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: 1
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Salt", "Oxygen", "Water", "Hydrogen"],
    answer: 2
  },
  {
    question: "Which language has the most native speakers?",
    options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
    answer: 3
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answer: 1
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    answer: 1
  },
  {
    question: "In which year did World War II end?",
    options: ["1940", "1945", "1939", "1950"],
    answer: 1
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
    answer: 3
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Which is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1
  },
  {
    question: "Which country hosted the 2020 Summer Olympics?",
    options: ["China", "Brazil", "Japan", "UK"],
    answer: 2
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "100°C", "32°C", "10°C"],
    answer: 0
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: 2
  },
  {
    question: "Which organ purifies our blood?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    answer: 2
  },
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: 2
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctica", "Kalahari"],
    answer: 2
  },
  {
    question: "Which vitamin is obtained from sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    question: "What is the national animal of Pakistan?",
    options: ["Lion", "Markhor", "Elephant", "Tiger"],
    answer: 1
  },
  {
    question: "Who discovered gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo", "Aristotle"],
    answer: 1
  },
  {
    question: "Which is the largest island in the world?",
    options: ["Australia", "Greenland", "Borneo", "Madagascar"],
    answer: 1
  },
  {
    question: "How many bones are in the adult human body?",
    options: ["206", "210", "201", "208"],
    answer: 0
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "80°C", "120°C"],
    answer: 1
  },
  {
    question: "Which is the national flower of Pakistan?",
    options: ["Rose", "Lily", "Jasmine", "Sunflower"],
    answer: 2
  },
  {
    question: "Which country has the most population?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: 2
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Gold", "Mercury", "Iron", "Aluminum"],
    answer: 1
  },
  {
    question: "How many players are in a cricket team?",
    options: ["10", "11", "12", "9"],
    answer: 1
  },
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    answer: 3
  },
  {
    question: "Which country is famous for pizza and pasta?",
    options: ["Spain", "Italy", "France", "Greece"],
    answer: 1
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Altimeter", "Speedometer"],
    answer: 0
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: 2
  },
  {
    question: "What is the full form of CPU?",
    options: ["Central Program Unit", "Central Processing Unit", "Computer Power Unit", "Control Processing Unit"],
    answer: 1
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: 2
  },
  {
    question: "Who was the founder of Pakistan?",
    options: ["Allama Iqbal", "Liaquat Ali Khan", "Benazir Bhutto", "Muhammad Ali Jinnah"],
    answer: 3
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Horse", "Tiger", "Cheetah", "Lion"],
    answer: 2
  },
  {
    question: "Which ocean is on the east coast of the United States?",
    options: ["Pacific", "Indian", "Atlantic", "Arctic"],
    answer: 2
  },
  {
    question: "Which device is used to find direction?",
    options: ["Speedometer", "Compass", "Altimeter", "Chronometer"],
    answer: 1
  },
  {
    question: "Which animal is called the ship of the desert?",
    options: ["Horse", "Camel", "Donkey", "Elephant"],
    answer: 1
  },
  {
    question: "Which month has an extra day in a leap year?",
    options: ["January", "February", "March", "April"],
    answer: 1
  },
  {
    question: "Which bird is known for mimicry?",
    options: ["Eagle", "Owl", "Parrot", "Sparrow"],
    answer: 2
  },
  {
    question: "Which blood type is a universal donor?",
    options: ["A", "B", "AB", "O"],
    answer: 3
  },
  {
    question: "Which festival marks the end of Ramadan?",
    options: ["Eid-ul-Adha", "Eid-ul-Fitr", "Milad-un-Nabi", "Shab-e-Barat"],
    answer: 1
  },
  {
    question: "Which is the largest bird in the world?",
    options: ["Peacock", "Eagle", "Ostrich", "Flamingo"],
    answer: 2
  },
  {
    question: "Which gas do humans breathe in?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    answer: 0
  },
  {
    question: "What is the national sport of Pakistan?",
    options: ["Cricket", "Hockey", "Football", "Squash"],
    answer: 1
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Peso"],
    answer: 0
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
    answer: 1
  },
  {
    question: "What is the main source of energy for Earth?",
    options: ["Moon", "Fire", "Sun", "Wind"],
    answer: 2
  },
  {
    question: "Which animal is known for carrying its baby in a pouch?",
    options: ["Panda", "Elephant", "Kangaroo", "Giraffe"],
    answer: 2
  },
  {
    question: "Which natural disaster is measured using the Richter scale?",
    options: ["Tornado", "Earthquake", "Flood", "Volcano"],
    answer: 1
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["UK", "Germany", "France", "Italy"],
    answer: 2
  },
  {
    question: "What is the most widely spoken language in the world?",
    options: ["English", "Mandarin", "Spanish", "Hindi"],
    answer: 1
  },
  {
    question: "Which color is a mixture of red and white?",
    options: ["Pink", "Purple", "Orange", "Brown"],
    answer: 0
  },
  {
    question: "What is the unit of electric current?",
    options: ["Ohm", "Volt", "Ampere", "Watt"],
    answer: 2
  },
  {
    question: "Which day is celebrated as Pakistan's Independence Day?",
    options: ["14th August", "23rd March", "25th December", "1st May"],
    answer: 0
  },
  {
    question: "What is the national fruit of Pakistan?",
    options: ["Banana", "Mango", "Apple", "Guava"],
    answer: 1
  },
  {
    question: "Which planet has a ring around it?",
    options: ["Mars", "Earth", "Saturn", "Venus"],
    answer: 2
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    answer: 1
  },
  {
    question: "Which animal is the largest reptile?",
    options: ["Snake", "Alligator", "Crocodile", "Turtle"],
    answer: 2
  },
  {
    question: "What is the name of the galaxy we live in?",
    options: ["Milky Way", "Andromeda", "Orion", "Nebula"],
    answer: 0
  },
  {
    question: "What is the study of weather called?",
    options: ["Biology", "Geology", "Meteorology", "Astronomy"],
    answer: 2
  },
  {
    question: "Which is the fastest bird?",
    options: ["Eagle", "Parrot", "Peregrine Falcon", "Ostrich"],
    answer: 2
  },
  {
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Which country is famous for Eiffel Tower?",
    options: ["Germany", "Italy", "UK", "France"],
    answer: 3
  },
  {
    question: "Which Islamic month is considered the most sacred?",
    options: ["Shaban", "Muharram", "Rabi-ul-Awal", "Ramadan"],
    answer: 3
  }
];

// For demo: fill up to 100 questions (replace with your own for a real quiz)
// while (questionPool.length < 100) {
//   questionPool.push({
//     question: `Sample Question #${questionPool.length + 1}`,
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     answer: Math.floor(Math.random() * 4)
//   });
// }

// --- Quiz Settings ---
const QUESTIONS_PER_QUIZ = 10;

let quizData = []; // Will hold the random questions for this session
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerList = document.getElementById('answer-list');
const nextBtn = document.getElementById('next-btn');
const progressEl = document.getElementById('progress');
const result = document.getElementById('result');
const scoreText = document.getElementById('score-text');
const summary = document.getElementById('summary');
const restartBtn = document.getElementById('restart-btn');

// Fisher-Yates Shuffle
function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function startQuiz() {
  // Pick random QUESTIONS_PER_QUIZ from the pool, shuffle order
  quizData = shuffle([...questionPool]).slice(0, QUESTIONS_PER_QUIZ);
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  result.style.display = 'none';
  quiz.style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  nextBtn.disabled = true;
  answerList.innerHTML = '';
  questionEl.textContent = quizData[currentQuestion].question;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  // Shuffle options for each question
  const optionOrder = [0,1,2,3];
  shuffle(optionOrder);
  quizData[currentQuestion].optionOrder = optionOrder; // Save for checking answer
  optionOrder.forEach((optIdx) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = quizData[currentQuestion].options[optIdx];
    btn.onclick = () => selectAnswer(optIdx, btn);
    li.appendChild(btn);
    answerList.appendChild(li);
  });
}

function selectAnswer(selectedIdx, btn) {
  const allBtns = answerList.querySelectorAll('button');
  allBtns.forEach(b => b.disabled = true);

  // Find actual answer index after shuffling
  const correctIdx = quizData[currentQuestion].answer;
  const shownOrder = quizData[currentQuestion].optionOrder;
  const correctShownIdx = shownOrder.indexOf(correctIdx);

  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
    score++;
    userAnswers.push({correct: true, selected: selectedIdx});
  } else {
    btn.classList.add('incorrect');
    allBtns[correctShownIdx].classList.add('correct');
    userAnswers.push({correct: false, selected: selectedIdx});
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quiz.style.display = 'none';
  result.style.display = 'block';
  scoreText.innerHTML = `Your Score: <b>${score} / ${quizData.length}</b>`;
  let summaryHTML = '<ul style="text-align:left; margin: 0 auto; max-width: 320px;">';
  quizData.forEach((q, idx) => {
    const icon = userAnswers[idx].correct ? '✅' : '❌';
    summaryHTML += `<li>${icon} <b>${q.question}</b><br>
      <span style="color:#6a11cb;">Your answer:</span> ${q.options[userAnswers[idx].selected] || 'No answer'}<br>
      <span style="color:var(--accent);">Correct answer:</span> ${q.options[q.answer]}
      </li><br>`;
  });
  summaryHTML += '</ul>';
  summary.innerHTML = summaryHTML;
}

restartBtn.addEventListener('click', startQuiz);

window.onload = startQuiz;
