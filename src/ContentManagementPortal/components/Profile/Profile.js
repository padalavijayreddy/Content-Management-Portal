import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { ProfileDiv, DeleteButton, ProfileImage, ProfileMainDiv, ProductCartSubDiv, CartImage, CartImageP, SignoutButton, ProductCartFooter } from './ProfileStyle';
import { header } from '../../../CommonModule/i18n/strings';

@observer
class Profile extends React.Component {

    hideCart = () => {
        const { toggleDisplayCart } = this.props;
        toggleDisplayCart();
    }

    render() {
        const { shouldDisplayCart, signOut } = this.props;
        return (
            <ProfileDiv {...{shouldDisplayCart}}>
                <DeleteButton data-testid='cart-close-button' onClick={this.hideCart}>X</DeleteButton>
                <ProfileMainDiv>
                    <ProfileImage src={header.profileImageURL}></ProfileImage>
                    <SignoutButton onClick={signOut}>Sign Out</SignoutButton>
                </ProfileMainDiv>    
            </ProfileDiv>
        );
    }
}

export { Profile };
