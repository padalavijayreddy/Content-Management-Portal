import { observable, action } from 'mobx';

class EditorModel {
    @observable id;
    @observable fileName;
    @observable languageType;
    @observable content;

    constructor(data) {
        this.id = data.id;
        this.fileName = data.fileName;
        this.languageType = data.languageType;
        this.content = data.languageType;
    }
}

export default EditorModel;
