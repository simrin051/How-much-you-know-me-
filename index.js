var readlineSync = require('readline-sync');
const chalk=require("chalk");

console.log(" 💛 Welcome to Quiz 💛");
var score=0;
var userName = readlineSync.question('May I have your❤️️  name ');
console.log('Hi ' + userName + '! 💕');

console.log(chalk.bgRed("Welcome to Quiz"));
console.log(chalk.red("Choose options (between 1 and 4)"));
var question1=
{
  question: "Where Am i from",
  answer: ["1. Kerala \n2. Bangalore \n3. Orrisa \n4. Kolkata\n" ],
  correctans:"2"

  };
var question2=
{
  question: "What is my pet name",
  answer: ["1. Simi \n2. Serene \n3. Anna \n4. Anu\n" ],
  correctans:"1"

  };
var question3=
{
  question: "When was i born",
  answer: ["1. 1997 \n2. 1996 \n3. 1998 \n4. 1995\n" ],
  correctans:"3"

  };

var question4=
{
  question: "Which month was i born",
  answer: ["1. Dec \n2. March \n3. Feb \n4. Jan\n" ],
  correctans:"4"

  };

var question5=
{
  question: "Where do i work",
  answer: ["1. Wipro \n2. Congizant \n3. LTI  \n4. TCS\n" ],
  correctans:"4"

  };

var questions= [
      question1,question2,question3,question4,question5

];

var bestscores=
[{
  
  name: "Serene",
  score: 5
  }
];
 // console.log("Questions length "+questions.get(0));

  for(var i=0;i<questions.length;i++)
  {
  
    var answer  = readlineSync.question(questions[i].question+"\n"+questions[i].answer);

    if(answer.toUpperCase ()==(questions[i].correctans.toUpperCase ()))
   {
      console.log(chalk.green("CORRECT 🤗"));
      score=score+1;
   }
   else
   {
     console.log(chalk.red("WRONG 🙁"));
   }

  }
  console.log(chalk.bgCyan("Score is "+score+" 🤩"));
  console.log("before best scores length "+bestscores.length);
for(var i=0;i<bestscores.length;i++)
{
if(score >= bestscores[i].score )
{
bestscores.push( {name:userName,score:score});
break;
}
}


console.log(chalk.bgYellow("Highest Scores"));
for(var i=0;i<bestscores.length;i++)
{
  console.log((bestscores[i].name+" "+bestscores[i].score));
}
