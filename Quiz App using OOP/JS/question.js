//CLASS TO CREATE THE QUESTIONS AND CHECK THE CORRECT ANSWER



class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(choice) {
        return choice === this.answer;
        
    }
}