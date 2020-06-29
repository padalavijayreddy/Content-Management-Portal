import React, { Component, createRef } from 'react'
import { observer } from 'mobx-react'
import {
   NotificationField,
   ImageContainerDiv,
   Img,
   NotificationText
} from './NotificationStyle'

@observer
export class Notification extends Component {
   render() {
      return (
         <NotificationField>
            <ImageContainerDiv>
               <Img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/48be00fa-100c-4b08-9d45-5876ca91f75c.png' />
            </ImageContainerDiv>
            <NotificationText>No Notifications Are There</NotificationText>
         </NotificationField>
      )
   }
}
