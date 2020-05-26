import React from 'react';
import { observer } from 'mobx-react';

@observer
class TabBar extends React.Component {

    render() {
        const { selectedTask, changeSelectedTask } = this.props;
        return (
            <ul className="flex justify-around">
                <li onClick={changeSelectedTask} id="Problem Statement">Statement</li>
                <li onClick={changeSelectedTask} id="Rough Solution">Rough Solution</li>
                <li onClick={changeSelectedTask} id="Test Cases">Test Cases</li>
                <li onClick={changeSelectedTask} id="Prefilled Code">Prefilled Code</li>
                <li onClick={changeSelectedTask} id="Solution Approach">Solution Approach</li>
                <li onClick={changeSelectedTask} id="clean Solution">clean Solution</li>
                <li onClick={changeSelectedTask} id="Hints">Hints</li>
            </ul>
        );
    }
}

export { TabBar };
