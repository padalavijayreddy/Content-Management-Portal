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
        this.question_id = data.question_id;
        this.short_title = data.short_title;
        this.roughsolution = data.roughsolution;
        this.testcase = data.testcase;
        this.prefilledcode = data.prefilledcode;
        this.solutionapproach = data.solutionapproach;
        this.cleansolution = data.cleansolution;
        this.hint = data.hint;
    }
}

export default CodingQuestionsModel;
