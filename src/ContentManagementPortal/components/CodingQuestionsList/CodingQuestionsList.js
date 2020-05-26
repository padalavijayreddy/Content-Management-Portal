import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../Header';
import { GoBack } from '../GoBack';
import { TabBar } from '../TabBar';

@observer
class CodingQuestionsList extends React.Component {
    render() {
        const { signOut, selectedTask, changeSelectedTask } = this.props;
        return (
            <div>
                <Header signOut = {signOut}/>
                <GoBack selectedTask = {selectedTask}/>
                <TabBar selectedTask = {selectedTask} changeSelectedTask={changeSelectedTask} />
            </div>
        );
    }
}

export { CodingQuestionsList };
