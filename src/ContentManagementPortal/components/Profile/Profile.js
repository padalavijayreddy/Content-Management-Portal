import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
   ProfileDiv,
   DeleteButton,
   ProfileImage,
   AccountCenterDiv,
   EmailId,
   AccountCenterP,
   ProfileMainDiv,
   SignOutButton,
   UserOptions,
   Option,
   AccountCenter
} from './ProfileStyle'
import { header } from '../../../CommonModule/i18n/strings'
import { FiSettings } from 'react-icons/fi'
import { FiThumbsUp } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineShareAlt, AiOutlineContacts } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'
import { RiTwitterLine } from 'react-icons/ri'

@observer
class Profile extends React.Component {
   hideCart = () => {
      const { toggleDisplayCart } = this.props
      toggleDisplayCart()
   }

   render() {
      const { shouldDisplayCart, signOut } = this.props
      return (
         <ProfileDiv {...{ shouldDisplayCart }}>
            <DeleteButton
               data-testid='cart-close-button'
               onClick={this.hideCart}
            >
               X
            </DeleteButton>
            <ProfileMainDiv>
               <AccountCenterDiv>
                  <ProfileImage src={header.profileImageURL}></ProfileImage>
                  <AccountCenter>
                     <AccountCenterP>Account Center</AccountCenterP>
                     <EmailId> @vijayReddyPadala </EmailId>
                  </AccountCenter>
               </AccountCenterDiv>
               <UserOptions>
                  <Option>
                     Settings <FiSettings />
                  </Option>
                  <Option>
                     Rate Us <FiThumbsUp />
                  </Option>
                  <Option>
                     Twitter <RiTwitterLine />
                  </Option>
                  <Option>
                     Contact Us <AiOutlineContacts />
                  </Option>
                  <Option>
                     Do Share <AiOutlineShareAlt />
                  </Option>
                  <SignOutButton onClick={signOut}>
                     <GoSignOut />
                     Sign Out
                  </SignOutButton>
               </UserOptions>
               <div></div>
            </ProfileMainDiv>
         </ProfileDiv>
      )
   }
}

export { Profile }
