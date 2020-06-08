import { observable, action } from 'mobx';

class RoughSolutionModel {
    @observable id;
    @observable fileName;
    @observable languageType;
    @observable content;
    
    
    //get the normal data here with rough solution id here but may it is using the delete 'id';

    constructor(data) {
        console.log("rough solution model", data);
        this.roughsolution_id = data.roughsolution_id;
        this.languageType = data.code_type;
        this.content = data.code;
        this.fileName = data.filename;
        this.delete_id = data.delete_id;
    }
}

export default RoughSolutionModel;
