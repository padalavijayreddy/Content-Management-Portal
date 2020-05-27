import React from 'react';
import { observer } from 'mobx-react';
import {
    MainDiv,
    SubDiv,
    Logo,
    SignUp,
    FieldsDiv,
    UsernameFieldContainerDiv,
    InputLabelField,
    InputField,
    ErrorImageIcon,
    PasswordFieldContainerDiv,
    SubmitButton,
    Button,
    Footer,
    NoAccount,
    AnchorTag
}
from './signInPageStyle';
import { API_FETCHING } from '../../../utils/APIUtils';
import Loader from "../../../components/common/Icons/Loader";
import { login } from '../../../i18n/strings';

export const SignInButton = ({ isLoading, onSubmit, onEnterKeyPress, SignIntext }) => {
    return (
        <Button disabled={isLoading} data-testid='sign-in-button' onClick={onSubmit} type="button" onKeyPress={onEnterKeyPress}>{(isLoading)?
        <Loader
            fill="white"
            height={25}
            width={25}
            />
        :SignIntext}</Button>
    );
};

SignInButton.defaultProps = {
    SignIntext: "LOGIN",
};

@observer
class SignInPage extends React.Component {
    userNameRef = React.createRef()
    passwordRef = React.createRef()
    render() {
        const {
            onChangeUsername,
            onChangePassword,
            onEnterKeyPress,
            username,
            password,
            onSubmit,
            isLoading,
            errorType,
        } = this.props;
        return (
            <MainDiv>    
                <SubDiv>
                    <Logo src={login.logoImgSrc} alt={login.ibhubsLogo}></Logo>
                    <SignUp>Hi There, Please SignUp</SignUp>
                    <FieldsDiv>
                        <UsernameFieldContainerDiv>
                            <InputLabelField>{login.username}</InputLabelField>
                            <InputField isErrorPresent={errorType == login.username} ref={this.userNameRef} onChange={onChangeUsername} value = {username} id={login.username} type="text" placeholder={login.username}/>
                            {(errorType == login.username)?<ErrorImageIcon src={login.errorIconSrc}/>:''}
                        </UsernameFieldContainerDiv>
                        <PasswordFieldContainerDiv>
                            <InputLabelField >{login.password}</InputLabelField>
                            <InputField isErrorPresent={errorType == login.password} ref={this.passwordRef} onChange={onChangePassword} value={password} id={login.password} type="password" placeholder={login.password} onKeyPress={onEnterKeyPress}/>
                            {(errorType == login.password)? <ErrorImageIcon src={login.errorIconSrc}/>:''}
                        </PasswordFieldContainerDiv>
                    </FieldsDiv>
                    <SubmitButton>
                            <SignInButton {...{isLoading, onEnterKeyPress, onSubmit}}/>
                    </SubmitButton>
                    <Footer>
                        <NoAccount>Don't have an account?</NoAccount> 
                        <AnchorTag href="">Signup</AnchorTag>
                    </Footer>
                </SubDiv>
            </MainDiv>
        );
    }
}
export { SignInPage };
