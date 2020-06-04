import React from 'react';
import { IdbuttonStyle, DeleteButtonImg } from './IdButtonStyle';

class IdButton extends React.Component {
    render() {
        const { makeActiveItem, eachTestcase, deleteId, index } = this.props;
        console.log(eachTestcase.id);
        return <IdbuttonStyle id={eachTestcase.id} onClick={makeActiveItem}><DeleteButtonImg onClick={deleteId} id={eachTestcase.id} src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/876b2b58-913f-48dd-a9e9-d7059587ad68.svg"/>{index+1}</IdbuttonStyle>;
    }
}

export { IdButton };
