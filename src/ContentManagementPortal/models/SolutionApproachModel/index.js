import { observable, action } from 'mobx';

class SolutionApproachModel {
    @observable title;
    @observable descriptionContentType;
    @observable descriptionContent;
    @observable complexityAnalysisContentType;
    @observable complexityAnalysisContent;

    constructor(data) {
        this.title = data.title;
        this.descriptionContentType = data.description.content_type;
        this.descriptionContent = data.description.content;
        this.complexityAnalysisContentType = data.complexityAnalysis.content_type;
        this.complexityAnalysisContent = data.complexityAnalysis.content;
    }
}

export default SolutionApproachModel;
