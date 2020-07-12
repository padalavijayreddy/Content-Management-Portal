import React, { Component, createRef } from 'react'
import { Redirect, history } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { API_FETCHING } from '@ib/api-constants'
import { LoginPage } from '../../components/LoginPage'
import { isLoggedIn } from '../../utils/AuthUtils'
import { CODING_QUESTIONS_LIST_PATH } from '../../../ContentManagementPortal/constants/RouteConstants/Navigation'
import { login } from '../../../CommonModule/i18n/strings.json'
import { AuthStore } from '../../stores/AuthStore'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18n from '../../../i18n'

interface historyProps extends WithTranslation {
   history: history
   authStore: AuthStore
}

@inject('authStore')
@observer
class LoginRoute extends React.Component<historyProps> {
   @observable username: string = ''
   @observable password: string = ''
   @observable passwordErrorMessage: string | null = ''
   @observable usernameErrorMessage: string | null = ''
   @observable errorType: string = ''
   @observable errorMessage: string = ''
   userNameRef = React.createRef<HTMLInputElement>()
   passwordRef = React.createRef<HTMLInputElement>()

   constructor(props) {
      super(props)
      this.init()
   }

   @action.bound
   init() {
      this.password = ''
      this.username = ''
      this.usernameErrorMessage = ''
      this.passwordErrorMessage = ''
      this.errorType = ''
      this.errorMessage = ''
   }

   componentDidMount() {
      this.userNameRef.current?.focus()
   }

   @action.bound
   onChangeUsername(event) {
      this.username = event.target.value
      this.errorType = this.username.length > 1 ? '' : this.errorType
      this.usernameErrorMessage =
         this.username.length > 1 ? '' : this.usernameErrorMessage
   }

   @action.bound
   onChangePassword(event) {
      this.password = event.target.value
      this.errorType = this.password.length > 1 ? '' : this.errorType
      this.passwordErrorMessage =
         this.password.length > 1 ? '' : this.passwordErrorMessage
   }

   @action.bound
   onSignInSuccess() {
      const { history } = this.props
      history.replace(CODING_QUESTIONS_LIST_PATH)
   }

   onSignInFailure = () => {
      const { authStore } = this.props
      const { getUserSignInAPIError: apiError } = authStore
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError
      }
   }
   @action.bound
   async onSubmit(event) {
      const { username, password } = this
      if (username.trim().length === 0) {
         this.usernameErrorMessage = login.invalidUsername
         this.errorType = login.username
         this.userNameRef.current?.focus()
      } else if (password.trim().length === 0) {
         this.passwordErrorMessage = login.invalidPassword
         this.errorType = login.password

         this.passwordRef.current?.focus()
      } else {
         const userData = {
            username: this.username,
            password: this.password
         }
         console.log(userData)
         const { onSignInSuccess, onSignInFailure } = this
         const { authStore } = this.props
         await authStore.userSignIn(userData, onSignInSuccess, onSignInFailure)
      }
   }

   renderContentManagementPortal = () => {
      return <Redirect to={CODING_QUESTIONS_LIST_PATH} />
   }

   onChangeLanguage = value => {
      console.log('english', value)
      i18n.changeLanguage(value)
   }

   render() {
      if (isLoggedIn()) {
         return this.renderContentManagementPortal()
      }
      const { authStore } = this.props
      const {
            props: {},
            onChangeUsername,
            onChangePassword,
            username,
            password,
            onSubmit,
            usernameErrorMessage,
            passwordErrorMessage,
            userNameRef,
            passwordRef,
            errorType,
            errorMessage,
            onChangeLanguage
         } = this,
         isLoading = authStore.getUserSignInAPIStatus === API_FETCHING
      return (
         <LoginPage
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
               errorMessage,
               userNameRef,
               passwordRef,
               onChangeLanguage
            }}
         />
      )
   }
}

export default withTranslation('', { withRef: true })(LoginRoute)
