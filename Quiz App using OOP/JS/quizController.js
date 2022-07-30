class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
         //GET THE INDEX OF THE QUESTION 
    getQuestionIndex(){
        return this.questions[this.questionIndex];

    }
       //METHOD TO CHECK IF THE QUIZ IS ENDED
    isEnded(){
       return this.questions.length === this.questionIndex;
    }
          //METHOD TO CHECK THE CORRECT ANSWER
    guess(answer){
        
        if (this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
        
    }
    this.questionIndex++
}

}
