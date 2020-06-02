import { observable, action } from 'mobx';

class ProblemStatementQuestionDetailsModel {
    @observable shortTitle;
    @observable contentType;
    @observable problemDescription;

    constructor(data) {
        this.shortTitle = data.short_title;
        this.contentType = data.problem_description.content_type;
        this.problemDescription = data.problem_description.content;
    }
}

export default ProblemStatementQuestionDetailsModel;
