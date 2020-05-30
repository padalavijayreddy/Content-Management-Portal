import { observable, action } from 'mobx';

class CodingQuestionsModel {
    @observable id;
    @observable questions;
    @observable roughSolution;
    @observable testCases;
    @observable prefilledCode;
    @observable solutionApproach;
    @observable cleanSolution;


    constructor(data) {
        this.id = data.id;
        this.questions = data.questions;
        this.roughSolution = data.roughSolution;
        this.testCases = data.testCases;
        this.prefilledCode = data.prefilledCode;
        this.solutionApproach = data.solutionApproach;
        this.cleanSolution = data.cleanSolution;
    }
}

export default CodingQuestionsModel;
