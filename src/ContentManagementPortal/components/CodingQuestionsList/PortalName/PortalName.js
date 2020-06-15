import React from 'react';
import { observer } from 'mobx-react';

// @observer
class PortalName extends React.Component {

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        this.props.getProjectName();
    }

    render() {
        return (
            <div>{this.props.projectName}</div>
        );
    }
}

export { PortalName };
