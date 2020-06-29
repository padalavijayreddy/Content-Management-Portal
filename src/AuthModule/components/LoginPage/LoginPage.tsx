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
import Loader from '../../../CommonModule/components/Icons/Loader';
import { login } from '../../../CommonModule/i18n/strings.json';
import { observable } from "mobx";

interface LoginProps{
   onChangeUsername : (e:any) => void
   onChangePassword : (e:any) => void
   username: string
   password:string
   onSubmit:(event: any) => Promise<void>
   isLoading:boolean
   errorType:string
   usernameErrorMessage:string|null
   passwordErrorMessage:string|null
   errorMessage:string
}


export const SignInButton = ({
   isLoading,
   onSubmit,
   SignIntext,
}) => {
   return (
      <Button
         disabled={isLoading}
         data-testid='sign-in-button'
         onClick={onSubmit}
         type='button'>
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
class LoginPage extends React.Component<LoginProps> {
   userNameRef = React.createRef<HTMLInputElement>()
   passwordRef = React.createRef<HTMLInputElement>()
   @observable isErrorPresent:boolean = false
   render() {
      const {
         onChangeUsername,
         onChangePassword,
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
                  <SignInButton {...{ isLoading, onSubmit }} />
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
