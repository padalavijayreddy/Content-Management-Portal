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
   ErrorMessageSpan,
   PasswordFieldContainerDiv,
   SubmitButton,
   Button,
   Footer,
   NoAccount,
   AnchorTag,
   InputDiv,
   ErrorMessage
}
from './LoginPageStyle';
import { API_FETCHING } from '../../../CommonModule/utils/APIUtils';
import Loader from '../../../CommonModule/components/Icons/Loader';
import { login } from '../../../CommonModule/i18n/strings';


export const SignInButton = ({
   isLoading,
   onSubmit,
   onEnterKeyPress,
   SignIntext,
}) => {
   return (
      <Button
         disabled={isLoading}
         data-testid='sign-in-button'
         onClick={onSubmit}
         type='button'
         onKeyPress={onEnterKeyPress}>
         {isLoading ? (
            <Loader fill='white' height={25} width={25} />
         ) : (
            SignIntext
         )}
      </Button>
   );
};

SignInButton.defaultProps = {
   SignIntext: 'LOGIN'
};


@observer
class LoginPage extends React.Component {
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
         usernameErrorMessage,
         passwordErrorMessage,
         errorMessage
      } = this.props;
      return (
         <MainDiv>
            <SubDiv>
               <Logo src={login.logoImgSrc} alt={login.ibhubsLogo}></Logo>
               <SignUp>{login.hiTherelogin}</SignUp>
               <FieldsDiv>
                  <UsernameFieldContainerDiv>
                     <InputLabelField>{login.username}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.username}>
                        <InputField
                           placeholder='Username'
                           ref={this.userNameRef}
                           onChange={onChangeUsername}
                           value={username}
                           id={login.username}
                           type='text'
                           data-testid='username'
                           />
                        {errorType == login.username ? (
                           <ErrorImageIcon src={login.errorIconSrc} />
                        ) : (
                           ''
                        )}
                     </InputDiv>
                     <ErrorMessageSpan>{usernameErrorMessage}</ErrorMessageSpan>
                  </UsernameFieldContainerDiv>
                  <PasswordFieldContainerDiv>
                     <InputLabelField>{login.password}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.password}>
                        <InputField
                           placeholder='Password'
                           data-testid='password'
                           ref={this.passwordRef}
                           onChange={onChangePassword}
                           value={password}
                           id={login.password}
                           type='password'
                        />
                        {errorType == login.password ? (
                           <ErrorImageIcon src={login.errorIconSrc} />
                        ) : (
                           ''
                        )}
                     </InputDiv> 
                     <ErrorMessageSpan>{passwordErrorMessage}</ErrorMessageSpan>
                  </PasswordFieldContainerDiv>
               </FieldsDiv>
               <SubmitButton>
                  <SignInButton {...{ isLoading, onEnterKeyPress, onSubmit }} />
                  <ErrorMessage>{errorMessage}</ErrorMessage>
               </SubmitButton>
               <Footer>
                  <NoAccount>Don't have an account?</NoAccount>
                  <AnchorTag href=''>{login.signup}</AnchorTag>
               </Footer>
            </SubDiv>
         </MainDiv>
      );
   }
}
export { LoginPage };
