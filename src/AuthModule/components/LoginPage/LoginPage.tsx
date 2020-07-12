import React from 'react'
import { observer } from 'mobx-react'
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
   ErrorMessage,
   Languages,
   Buttons
} from './LoginPageStyle'
import Loader from '../../../CommonModule/components/Icons/Loader'
import { login } from '../../../CommonModule/i18n/strings.json'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'

interface LoginProps extends WithTranslation {
   onChangeUsername: (e: any) => void
   onChangePassword: (e: any) => void
   onChangeLanguage: (e: any) => void
   username: string
   password: string
   onSubmit: (event: any) => Promise<void>
   isLoading: boolean
   errorType: string
   usernameErrorMessage: string | null
   passwordErrorMessage: string | null
   errorMessage: string
   userNameRef: React.RefObject<HTMLInputElement>
   passwordRef: React.RefObject<HTMLInputElement>
}

export const SignInButton = ({ isLoading, onSubmit, SignIntext }) => {
   return (
      <Button
         disabled={isLoading}
         data-testid='sign-in-button'
         onClick={onSubmit}
         type='button'
      >
         {isLoading ? (
            <Loader fill='white' height={25} width={25} />
         ) : (
            SignIntext
         )}
      </Button>
   )
}

SignInButton.defaultProps = {
   SignIntext: 'LOGIN'
}

@observer
class LoginPage extends React.Component<LoginProps> {
   @observable isErrorPresent: boolean = false
   render() {
      const {
         t,
         onChangeUsername,
         onChangePassword,
         username,
         password,
         onSubmit,
         isLoading,
         errorType,
         usernameErrorMessage,
         passwordErrorMessage,
         errorMessage,
         userNameRef,
         passwordRef,
         onChangeLanguage
      } = this.props
      return (
         <MainDiv>
            <SubDiv>
               <Logo src={login.logoImgSrc} alt={login.ibhubsLogo}></Logo>
               <SignUp>{t('login:hiTherelogin')}</SignUp>
               <FieldsDiv>
                  <UsernameFieldContainerDiv>
                     <InputLabelField>{t('login:username')}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.username}>
                        <InputField
                           placeholder='Username'
                           ref={userNameRef}
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
                     <InputLabelField>{t('login:password')}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.password}>
                        <InputField
                           placeholder='Password'
                           data-testid='password'
                           ref={passwordRef}
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
                  <NoAccount>{t('login:dontHaveAnAccount')}</NoAccount>
                  <AnchorTag href=''>{t('login:signup')}</AnchorTag>
               </Footer>
            </SubDiv>
            <Languages>
               <Buttons onClick={() => onChangeLanguage('en')}>
                  {t('login:english')}
               </Buttons>
               <Buttons onClick={() => onChangeLanguage('te')}>
                  {t('login:telugu')}
               </Buttons>
            </Languages>
         </MainDiv>
      )
   }
}

export default withTranslation('', {})(LoginPage)
