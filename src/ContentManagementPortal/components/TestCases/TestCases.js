import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class TestCases extends React.Component {
    render() {
        return (
            <div>
                TestCases
            </div>
        );
    }
}

export { TestCases };
