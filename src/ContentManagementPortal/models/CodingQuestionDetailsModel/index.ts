import { observable, action } from 'mobx';
import ProblemStatementQuestionDetailsModel from '../ProblemStatementQuestionDetailsModel';
import RoughSolutionModel from '../RoughSolutionModel';
import TestCasesModel from '../TestCasesModel';
import PrefilledCodeModel from '../PrefilledCodeModel';
import SolutionApproachModel from '../SolutionApproachModel';
import CleanSolutionModel from '../CleanSolutionModel';
import HintsModel from '../HintsModel';
import {CodingQuestionDetails} from '../../stores/types'

class CodingQuestionDetailsModel {
    @observable problemStatement:object = {};
    @observable roughSolution:Array<object> = [];
    @observable testCases:Array<object> = [];
    @observable prefilledCode:Array<object> = [];
    @observable solutionApproach:object = {};
    @observable cleanSolution:Array<object> = [];
    @observable hints:Array<object> = [];

    constructor(data:CodingQuestionDetails) {
        this.problemStatement = new ProblemStatementQuestionDetailsModel(data.question_details);
        data.roughsolutions.map(eachRoughSolution => this.roughSolution.push(new RoughSolutionModel(eachRoughSolution)));
        data.testcases.map(eachTestCase => this.testCases.push(new TestCasesModel(eachTestCase)));
        data.prefilledcodes.map(eachPrefilledCode => this.prefilledCode.push(new PrefilledCodeModel(eachPrefilledCode)));
        this.solutionApproach = new SolutionApproachModel(data.solutionapproaches);
        data.cleansolutions.map(eachCleanSolution => this.cleanSolution.push(new CleanSolutionModel(eachCleanSolution)));
        data.hints.map(eachHint => this.hints.push(new HintsModel(eachHint)));
    }
}

export default CodingQuestionDetailsModel;
