import { observable, action } from 'mobx';

class SolutionApproachModel {
    @observable title;
    @observable descriptionContentType;
    @observable descriptionContent;
    @observable complexityAnalysisContentType;
    @observable complexityAnalysisContent;

    constructor(data) {
        this.id = data.solutionapproach_id;
        this.title = data.title;
        this.descriptionContentType = data.description_content_type;
        this.descriptionContent = data.description_content;
        this.complexityAnalysisContentType = data.complexity_analysis_content_type;
        this.complexityAnalysisContent = data.complexity_analysis_content;
    }
}

export default SolutionApproachModel;
