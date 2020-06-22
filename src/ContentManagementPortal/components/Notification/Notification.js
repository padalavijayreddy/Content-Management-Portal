import React, { Component, createRef } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx';

@observer
export class Notification extends Component {

    render() {
        return (
            <div className="text-lg text-black font-bold w-100px h-100px">No NOTIFICATIONS are there Right Now</div>
        )
    }
}
