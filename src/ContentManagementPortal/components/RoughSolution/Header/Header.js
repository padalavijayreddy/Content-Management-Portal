import React from 'react';
import { observer } from 'mobx-react';

@observer
class Header extends React.Component {
    render() {
        return (
            <div>
                hii im header
            </div>
        );
    }
}

export { Header };
