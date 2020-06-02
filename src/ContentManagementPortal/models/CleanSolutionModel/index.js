import { observable, action } from 'mobx';

class CleanSolutionModel {
    @observable id;
    @observable fileName;
    @observable languageType;
    @observable content;

    constructor(data) {
        this.id = data.cleansolution_id;
        this.languageType = data.code_type;
        this.content = data.code;
        this.fileName = data.filename;
    }
}

export default CleanSolutionModel;
