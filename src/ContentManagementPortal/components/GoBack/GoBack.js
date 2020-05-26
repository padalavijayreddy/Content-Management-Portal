import React from 'react';
import { observer } from 'mobx-react';

@observer
class GoBack extends React.Component {
    render() {
        const { selectedTask } = this.props;
        return (
            <div className="font-bold text-xl">
                <div>
                    <img></img>
                    <p>Back To List</p>
                </div>
                <div>
                    {selectedTask}
                </div>
            </div>
        );
    }
}

export { GoBack };
