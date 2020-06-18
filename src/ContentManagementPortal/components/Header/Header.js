import React from 'react'
import {
   TopBar,
   SignOutbutton,
   Notification,
   HeaderNotify
}
from './HeaderStyle';
import { header } from '../../../CommonModule/i18n/strings';
import { Profile } from '../Profile';

class Header extends React.Component {
   render() {
      const { signOut, toggleDisplayCart, shouldDisplayCart } = this.props;
      return (
         <TopBar>
            <img src={header.ibhubsLogoURL}></img>
            <HeaderNotify>
               <Notification src={header.notificationURL}></Notification>
               <Profile {...{shouldDisplayCart,toggleDisplayCart,signOut}}/>
               <SignOutbutton data-testid={header.dataTextid} src={header.profileImageURL} alt={header.profileImageAlt} onClick = {toggleDisplayCart } title="Sign Out"></SignOutbutton>
            </HeaderNotify>   
         </TopBar>
      );
   }
}

export { Header };
