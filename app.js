var readlineSync = require("readline-sync")
var chalk = require("chalk")
count = 0 ;
console.log(chalk.green("Welcome to <--- The Family Man ---> quiz"));

var userName = readlineSync.question("Tell Me Your Name :-");

console.log(chalk.yellow("Hello "+userName+" Let's start the QUIZ"));

console.log(chalk.blue("To give answers :- just type options and press enter( a + enter)"))

function play(question,answer){
    var userAnswer = readlineSync.question(question);
    var upperAnswer = userAnswer.toUpperCase();
    if (upperAnswer === answer){
        console.log(chalk.green("RIGHT ANSWER"));
        count++ ;
    }
    else{
        console.log(chalk.red("WRONG ANSWER"));   
    }
   console.log("your score is "+ count);
}

var highScorers = [
    first = {
        name: "dada",
        score: "4"
      },
    second = {
        name : "aditya",
        score: "5"
          
    }
]

 var questionbank= [
    questionOne = {
        question:"question 1 -->  what is name of terriost chemical engineer \na: moosa \nb: fiazan \nc: ahamad  ",
        answer:"A"

    },
    questionTwo = {
        question:"question 2 -->  Name of shrikant's best friend \na: pasha \nb: jk \nc: rane  ",
        answer:"B"
    },
    questionThree = {
        question:"question 3 -->  how many time's shrikant lied to his wife \na: 10 times \nb: 100 times \nc: infinite times  ",
        answer:"C"
       

    },
    questionFour = {
        question :"question 4 -->  Name of terriost's mission\na: zulfiquar \nb: codem \nc: jasn-a-delhi  ",
        answer:"A"
        
    },
    questionFive = {
        question :"question 5 -->  Name of security agency shrikant workin in  \na:TASC \nb: NIA \nc:CBI  ",
        answer:"A"
        
    }
]
for (var i=0 ; i<questionbank.length ; i++){

  play(questionbank[i].question,questionbank[i].answer)
}


if(count >= highScorers[0].score){
    console.log("Your Final Score is "+ count + "\nYAY !! you are new high scorer"  );
    let newScorer = {
      name : userName ,
      score : count
    }
    highScorers.push(newScorer)
    console.log(highScorers)
}
else{
    console.log(chalk.cyan("your final score is "+ count));
}
