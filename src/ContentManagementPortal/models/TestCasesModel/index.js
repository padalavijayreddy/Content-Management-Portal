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
        this.isHidden = data.is_Hidden;
        this.score = data.score;
        this.order_id = data.order_id;
        this.isActive = data.isActive;
    }
}

export default TestCasesModel;
