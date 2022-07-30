let question = [
    new Question("Which one is not an object oriented programming language?",['Java','C#','C++','C'],'C'),
    new Question("Which language is used for styling webpages?",['HTML','JQuery','CSS','XML'],'CSS'),
    new Question("There are ____ main components of objects oriented programming?",['1','6','2','4'],'4'),
    new Question("Which language is used for web apps?",['PHP','Python','JavaScript','All'],'All'),
    new Question("Mvc is a ____?",['Language','Libary','Framework','All'],'All')
];

let quiz = new Quiz(question);
// randomChoice = Math.floor(Math.random() * 4) + 1;


populate();

function populate(){
    if(quiz.isEnded()){
        
        showScores();
        
    }
    else{
        let showQuestion = document.getElementById('question')
        showQuestion.innerHTML = quiz.getQuestionIndex().text

        // populate choices
        // let choice0 = document.getElementById('choice0');
        // choice0.innerHTML = quiz.getQuestionIndex().choices[0];

        // let choice1 = document.getElementById('choice1');
        // choice1.innerHTML = quiz.getQuestionIndex().choices[1];
        
        // let choice2 = document.getElementById('choice2');
        // choice2.innerHTML = quiz.getQuestionIndex().choices[2];

        // let choice3 = document.getElementById('choice3');
        // choice3.innerHTML = quiz.getQuestionIndex().choices[3]

        // guess('btn' + i, quiz.getQuestionIndex().choices[i])

        let choices = quiz.getQuestionIndex().choices
        for (let i = 0; i < choices.length; i++){
            let element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i])
        }
        showProgress();
     }
}

function guess(id,guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate()
    }


}



function showScores(){
    let gameOverHtml = '<h1> Result </h1>';
    gameOverHtml += `<h2 id = 'score'> Your Scores: ${quiz.score} </h2>`
    let quizHtml = document.getElementById("quiz");
    quizHtml.innerHTML = gameOverHtml;
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progress = document.getElementById('progress');
    progress.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}` ;

}

