import { observable, action } from 'mobx';
import ProblemStatementQuestionDetailsModel from '../ProblemStatementQuestionDetailsModel';
import RoughSolutionModel from '../RoughSolutionModel';
import TestCasesModel from '../TestCasesModel';
import PrefilledCodeModel from '../PrefilledCodeModel';
import SolutionApproachModel from '../SolutionApproachModel';
import CleanSolutionModel from '../CleanSolutionModel';
import HintsModel from '../HintsModel';

class CodingQuestionDetailsModel {
    @observable problemStatement = {};
    @observable roughSolution = [];
    @observable testCases = [];
    @observable prefilledCode = [];
    @observable solutionApproach = {};
    @observable cleanSolution = [];
    @observable hints = [];

    constructor(data) {
        console.log("original data from back end coming", data.roughsolutions);
        this.problemStatement = new ProblemStatementQuestionDetailsModel(data.question_details);
        data.roughsolutions.map(eachRoughSolution => console.log("rough solution original", eachRoughSolution));
        data.roughsolutions.map(eachRoughSolution => this.roughSolution.push(new RoughSolutionModel(eachRoughSolution)));
        data.testcases.map(eachTestCase => this.testCases.push(new TestCasesModel(eachTestCase)));
        data.prefilledcodes.map(eachPrefilledCode => this.prefilledCode.push(new PrefilledCodeModel(eachPrefilledCode)));
        this.solutionApproach = new SolutionApproachModel(data.solutionapproaches);
        data.cleansolutions.map(eachCleanSolution => this.cleanSolution.push(new CleanSolutionModel(eachCleanSolution)));
        data.hints.map(eachHint => this.hints.push(new HintsModel(eachHint)));
    }
}

export default CodingQuestionDetailsModel;
