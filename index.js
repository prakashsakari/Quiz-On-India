var chalk = require('chalk')

console.log((chalk.blue(`Welcome to Prakash\'s Quiz on India 
Let see how good is your general knowledge\n`)) + 
(chalk.green(`\nEnter the correct option(a/b/c/d) for every question.
All the Best`)));

var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name: 'Prakash',
    score: 10
  },
  {
    name: 'Vimal',
    score: 9
  },
  {
    name: 'Glen',
    score: 7
  }
];
var name = readlineSync.question('Whats your name? ');

function welcome(){ 
  console.log(chalk.yellow.italic('\nWelcome '+name+', let\'s see how well do you know India\n' ));
}



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log('You entered ' + userAnswer);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold('You are right'));
    score++;
    boostMessage();
  }else{
    console.log(chalk.red.bold('You are wrong!\n' + chalk.green('Correct answer: ' + answer + '\n')));
  }
}

var questionAnswerList = [

  {
    question: `Q: Which city is called pink city of India?
a: Mumbai
b: Jaisalmer
c: Jodhpur
d: Jaipur 

Enter your answer here: `,
    answer: 'd'
  },

  {
    question: `Q: Which city is the tea city of India? 
a: Dibrugarh, Assam
b: Guwahati, Assam
c: Darjeeling, West Bengal
d: Munnar, Kerala

Enter your answer here: `,
    answer: 'a'
  },
  
  {
  question: `Q: What is the financial capital of India? 
a: Delhi
b: Gujrat
c: Mumbai
d: None of the above

Enter your answer here: `,
  answer: 'c'
  },


  {
  question: `Q: Who is the founder of ISRO? 
a: Dr. Vikram Sarabai
b: Satish Dhawan
c: Dr APJ Abdul Kalam
d: None of the above

Enter your answer here: `,
  answer: 'a'
  },

  {
    question: `Q: Who was the 1st Prime Minister of India? 
a: Gulzar Lal Nanda
b: Lal Bahadur Shastri
c: Pandit Jawaharlal Nehru
d: None of the above
    
Enter your answer here: `,
    answer: 'c'
  }, 

  {
  question: `Q: Who was the first women External Affairs Minister of India? 
a: Nandini Satpathy
b: Prathiba Patil
c: Violet Hari Alva
d: Indira Gandhi

Enter your answer here: `,
  answer: 'd'
  },

  {
  question: `Q: Who was the first female President of India? 
a: Indira Gandhi
b: Prathiba Patil
c: Violet Hari Alva
d: None of the above

Enter your answer here: `,
answer: 'b'
  },

  {
  question: `Q: Bihu daance form is performed mostly in which state?
a: Odisha
b: Tripura
c: Assam
d: Meghalaya 

Enter your answer here: `,
answer: 'c'
  },

  {
  question: `Q: Which one of the following is the National Heritage Animal of India? 
a: Royal Bengal Tiger
b: Indian Elephant
c: Indian Peacock
d: Indian Lion

Enter your answer here: `,
  answer: 'b'
  },

  {
  question: `Q: What is the motto of National Emblem of India? 
a: Satyameva Jayate
b: Vande Mataram
c: Incredible India
d: None of the above
  
Enter your answer here: `,
answer: 'a'
  },
  {
  question: `Q: Which is the smallest (in area) of the following Union Territories? 
a: Chandigarh
b: Dadra and Nagar Haveli
c: Daman and Diu
d: Lakshwadeep
  
Enter your answer here: `,
  answer: 'd'
  },
  {
  question: `Q: Which of the following river does not originate in India? 
a: Mahanadi
b: Brahmaputra
c: Chenab
d: Ravi
  
Enter your answer here: `,
  answer: 'b'
  },

  {
  question: `Q: Which city in India is the first to use wastes to generate power 
a: Mumbai
b: Delhi
c: Chennai
d: Kolkata
  
Enter your answer here: `,
  answer: 'c'
  },

  {
  question: `Q: Who is called as the Iron Man of India? 
a: Sardar Vallabhbhai Patel
b: Dr. APJ Abdul Kalam,
c: Ratan Tata,
d: None of the above

Enter your answer here: `,
  answer: 'a'
  }
  
];


function boostMessage(){
  var msg = ['Woah! You are a pro!!!', 'You are a champion....',
  'You are a legend!!!!', 'That was smooth!!!!','You own the game!!!', 'You are awesome...']

  var randomItem = msg[Math.floor(Math.random() * msg.length)];

  console.log(chalk.magenta(randomItem + '\n'));
}


function game(){
  for (var i=0; i<questionAnswerList.length; i++){
  var currentQuestion = questionAnswerList[i];
  play(currentQuestion.question, currentQuestion.answer)
}
}

function showScore(){
  console.log(chalk.red.bold('Yeah!! ' + name + ', your total score: ' + score));
}

function topScorer(){
  var leader = highScores[0].score
  for (var j=0; j<highScores.length; j++){
    if (leader < highScores[j].score){
      leader = highScores[j].score;
    }   
  }
  if (score > leader){
    console.log(chalk.green('Congratulations, you have beaten the previous high score!\nKindly send a screen shot of this message and I will update the leaders board'));
  }else{
    console.log(chalk.yellow(`Hope you had a great time playing the quiz.
You can try again anytime to beat the high score`));
    console.log('\nCheck out high score of some of our players');
    for (var j=0; j<highScores.length; j++){
    var currentValue = highScores[j];
    console.log(chalk.blue(currentValue.name + ' : ' + currentValue.score));
  }
  }
}

welcome();
game();
showScore();
topScorer();