import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { MainDiv, SubDiv, Image, Logo, SignUp, Form, UserInputDiv, UserInputLabel, UserInput, PasswordInputDiv, PasswordLabel, PasswordInput, SubmitButton, Button, ErrorMessage, Forgot, Footer, NoAccount, AnchorTag } from './signInPageStyle';
import { API_FETCHING } from '../../../utils/APIUtils';
import { getAccessToken } from '../../../utils/StorageUtils';
import Loader from "../../../components/common/Icons/Loader";

export const SignInButton = ({ isLoading, onSubmit, onEnterKeyPress, SignIntext }) => {
    return (
        <Button disabled={isLoading} data-testid='sign-in-button' onClick={onSubmit} type="button" onKeyPress={onEnterKeyPress}>{(isLoading)?
        <Loader
            fill="black"
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
            errorMessage,
            isLoading,
        } = this.props;
        return (
            <MainDiv>    
                <SubDiv>
                    <Form>
                        <Image>
                            <Logo src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg" alt="iBHubs Logo"></Logo>
                            <SignUp>Hi There, Please SignUp</SignUp>
                        </Image>
                        <UserInputDiv>
                            <UserInputLabel>USER NAME</UserInputLabel>
                            <UserInput ref={this.userNameRef} onChange={onChangeUsername} value = {username} id="username" type="text"/>
                        </UserInputDiv>
                        <PasswordInputDiv>
                            <PasswordLabel>PASSWORD</PasswordLabel>
                            <PasswordInput ref={this.passwordRef} onChange={onChangePassword} value={ password } id="password" type="password"  onKeyPress={onEnterKeyPress}/>
                        </PasswordInputDiv>
                        <SubmitButton>
                           <div>
                                <SignInButton {...{isLoading, onEnterKeyPress, onSubmit}}/>
                                <ErrorMessage>{errorMessage }</ErrorMessage>
                           </div>    
                        </SubmitButton>
                        <Footer>
                            <NoAccount>Don't have an account?</NoAccount> 
                            <AnchorTag href="">Signup</AnchorTag>
                        </Footer>
                    </Form>
                </SubDiv>
        </MainDiv>
        );
    }
}
export { SignInPage };
