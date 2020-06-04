import React from 'react'
import {
   TopBar,
   SignOutbutton,
   Notification,
   HeaderNotify
}
from './HeaderStyle';
import { header } from '../../../CommonModule/i18n/strings';

class Header extends React.Component {
   render() {
      const { signOut } = this.props;
      return (
         <TopBar>
            <img src={header.ibhubsLogoURL}></img>
            <HeaderNotify>
               <Notification src={header.notificationURL}></Notification>
               <SignOutbutton data-testid={header.dataTextid} src={header.profileImageURL} alt={header.profileImageAlt} onClick={signOut}></SignOutbutton>
            </HeaderNotify>   
         </TopBar>
      );
   }
}

export { Header };
