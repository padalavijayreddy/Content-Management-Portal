import React, { Component, createRef } from 'react';
import { Redirect ,history} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { API_FETCHING } from '@ib/api-constants';
import { LoginPage } from '../../components/LoginPage';
import { isLoggedIn } from '../../utils/AuthUtils';
import { CODING_QUESTIONS_LIST_PATH } from '../../../ContentManagementPortal/constants/RouteConstants/Navigation';
import { login } from '../../../CommonModule/i18n/strings.json';
import { AuthStore } from '../../stores/AuthStore';

type historyProps={
    history:history
    authStore:AuthStore
}

@inject('authStore')
@observer
class LoginRoute extends React.Component<historyProps> {
   @observable username:string='';
   @observable password:string='';
   @observable passwordErrorMessage:string|null='';
   @observable usernameErrorMessage:string|null='';
   @observable errorType:string='';
   @observable errorMessage:string='';
   loginPageRef:React.RefObject<LoginPage>= React.createRef<LoginPage>();
   
   constructor(props) {
      super(props);
      this.init();
   }

   @action.bound
   init() {
      this.password = '';
      this.username = '';
      this.usernameErrorMessage = '';
      this.passwordErrorMessage = '';
      this.errorType = '';
      this.errorMessage = '';
   }

   componentDidMount() {
      // const {current} = this.loginPageRef
      // if (current!== null) {
      //    const {userNameRef:{current:currentRef}} = current as LoginPage
      //    const {focus} = currentRef as HTMLInputElement
      //    focus();
      // }
      this.loginPageRef.current?.userNameRef.current?.focus();
   }

   @action.bound
   onChangeUsername(event) {
      this.username = event.target.value;
      this.errorType = this.username.length > 1 ? '' : this.errorType;
      this.usernameErrorMessage = this.username.length > 1 ? '' : this.usernameErrorMessage;
   }

   @action.bound
   onChangePassword(event) {
      this.password = event.target.value;
      this.errorType = this.password.length > 1 ? '' : this.errorType;
      this.passwordErrorMessage = this.password.length > 1 ? '' : this.passwordErrorMessage;
   }

   @action.bound
   onSignInSuccess() {
      const { history } = this.props;
      history.replace(CODING_QUESTIONS_LIST_PATH);
   }

   onSignInFailure = () => {
      const { authStore } = this.props;
      const { getUserSignInAPIError: apiError } = authStore;
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError;
      }
   }
   @action.bound
   async onSubmit(event) {
      const { username, password } = this;
      if (username.trim().length === 0) {
         this.usernameErrorMessage = login.invalidUsername;
         this.errorType = login.username;
         
      this.loginPageRef.current?.userNameRef.current?.focus();;
      }
      else if (password.trim().length === 0) {
         this.passwordErrorMessage = login.invalidPassword;
         this.errorType = login.password;
         
      this.loginPageRef.current?.passwordRef.current?.focus();
      }
      else {
         const userData = {
            "username": this.username,
            "password": this.password
         };
         console.log(userData);
         const { onSignInSuccess, onSignInFailure } = this;
         const { authStore } = this.props;
         await authStore.userSignIn(userData, onSignInSuccess, onSignInFailure);
      }
   }

   renderContentManagementPortal = () => {
      return <Redirect to={CODING_QUESTIONS_LIST_PATH} />;
   }

   render() {
      if (isLoggedIn()) {
         return this.renderContentManagementPortal();
      }
      const { authStore } = this.props;
      const {
         props: {},
         onChangeUsername,
         onChangePassword,
         username,
         password,
         onSubmit,
         usernameErrorMessage,
         passwordErrorMessage,
         loginPageRef,
         errorType,
         errorMessage
      } = this,
      isLoading = authStore.getUserSignInAPIStatus === API_FETCHING;
      return (
         <LoginPage
            ref={loginPageRef}
            {...{
               onChangeUsername,
               onChangePassword,
               username,
               password,
               onSubmit,
               isLoading,
               usernameErrorMessage,
               passwordErrorMessage,
               errorType,
               errorMessage
            }}
         />
      );
   }
}

export { LoginRoute };
