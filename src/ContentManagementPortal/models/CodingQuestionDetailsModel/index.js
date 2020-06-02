import { observable, action } from 'mobx';
import ProblemStatementQuestionDetailsModel from '../ProblemStatementQuestionDetailsModel';
import RoughSolutionModel from '../RoughSolutionModel';
import TestCasesModel from '../TestCasesModel';
import PrefilledCodeModel from '../PrefilledCodeModel';
import SolutionApproachModel from '../SolutionApproachModel';
import CleanSolutionModel from '../CleanSolutionModel';

class CodingQuestionDetailsModel {
    @observable problemStatement = {};
    @observable roughSolution = [];
    @observable testCases = [];
    @observable prefilledCode = [];
    @observable solutionApproach = {};
    @observable cleanSolution = [];

    constructor(data) {
        this.problemStatement = new ProblemStatementQuestionDetailsModel(data.problemStatement);
        data.roughSolutionList.map(eachRoughSolution => this.roughSolution.push(new RoughSolutionModel(eachRoughSolution)));
        data.testCasesList.map(eachTestCase => this.testCases.push(new TestCasesModel(eachTestCase)));
        data.prefilledCodeList.map(eachPrefilledCode => this.prefilledCode.push(new PrefilledCodeModel(eachPrefilledCode)));
        this.solutionApproach = new SolutionApproachModel(data.solutionApproach);
        data.cleanSolution.map(eachCleanSolution => this.cleanSolution.push(new CleanSolutionModel(eachCleanSolution)));
    }
}

export default CodingQuestionDetailsModel;
