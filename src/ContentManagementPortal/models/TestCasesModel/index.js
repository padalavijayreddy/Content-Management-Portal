import { observable, action } from 'mobx';

class TestCasesModel {
    @observable input;
    @observable output;
    @observable score;
    @observable isHidden;
    @observable isActive;

    constructor(data) {
        this.id = data.testcases_id;
        this.input = data.input;
        this.output = data.output;
        this.score = data.score;
        this.isHidden = data.isHidden;
        this.isActive = data.isActive
    }
}

export default TestCasesModel;
