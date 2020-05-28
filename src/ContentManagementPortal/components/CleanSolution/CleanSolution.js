import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class CleanSolution extends React.Component {
    render() {
        return <div>Clean Solution</div>;
    }
}

export { CleanSolution };
