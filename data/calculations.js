class Calculations{
    constructor(inputOne,inputTwo){
        this.inputOne = inputOne;
        this.inputTwo = inputTwo;
    }
    get yep(){
        return this.andTheAnswerIs();
    }
    
    andTheAnswerIs(){
        return this.inputOne + this.inputTwo;
    }
}


module.exports = Calculations;