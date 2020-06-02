import { observable, action } from 'mobx';

class TestCasesModel {
    @observable input;
    @observable output;
    @observable score;
    @observable isHidden;

    constructor(data) {
        this.input = data.input;
        this.output = data.output;
        this.score = data.score;
        this.isHidden = data.isHidden;
    }
}

export default TestCasesModel;
