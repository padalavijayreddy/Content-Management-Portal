import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { API_FETCHING } from '@ib/api-constants'
import { SignInPage } from '../../components/SignInPage'
import { isLoggedIn } from '../../utils/AuthUtils'
import { Coding_Questions_List_Path } from '../../../constants/RouteConstants'
import { login } from '../../../i18n/strings'

@inject('authStore')
@observer
class SignInRoute extends React.Component {
   @observable status
   @observable username
   @observable password
   @observable errorMessage
   @observable errorType
   signInPageRef

   constructor(props) {
      super(props)
      this.init()
   }

   @action.bound
   init() {
      this.signInPageRef = React.createRef()
      this.password = ''
      this.username = ''
      this.errorMessage = ''
      this.errorType = ''
   }

   componentDidMount() {
      if (this.signInPageRef.current !== null) {
         this.signInPageRef.current.userNameRef.current.focus()
      }
   }

   @action.bound
   onChangeUsername(event) {
      this.username = event.target.value
      this.errorType = this.username.length > 1 ? '' : this.errorType
   }

   @action.bound
   onChangePassword(event) {
      this.password = event.target.value
      this.errorType = this.password.length > 1 ? '' : this.errorType
   }

   @action.bound
   onSignInSuccess() {
      const { history } = this.props
      history.replace(Coding_Questions_List_Path)
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
         this.errorMessage = [login.invalidUsername]
         this.errorType = [login.username]
         this.signInPageRef.current.userNameRef.current.focus()
      } else if (password.trim().length === 0) {
         this.errorMessage = [login.invalidPassword]
         this.errorType = [login.password]
         this.signInPageRef.current.passwordRef.current.focus()
      } else {
         const userData = { username, password }
         const { onSignInSuccess, onSignInFailure } = this
         const { authStore } = this.props
         await authStore.userSignIn(userData, onSignInSuccess, onSignInFailure)
      }
   }

   renderProductsPage = () => {
      return <Redirect to={Coding_Questions_List_Path} />
   }

   render() {
      if (isLoggedIn()) {
         return this.renderProductsPage()
      }
      const { authStore } = this.props
      const {
            props: {},
            onChangeUsername,
            onChangePassword,
            onEnterKeyPress,
            username,
            password,
            onSubmit,
            errorMessage,
            signInPageRef,
            errorType
         } = this,
         isLoading = authStore.getUserSignInAPIStatus === API_FETCHING
      return (
         <SignInPage
            ref={signInPageRef}
            {...{
               onChangeUsername,
               onChangePassword,
               onEnterKeyPress,
               username,
               password,
               onSubmit,
               isLoading,
               errorMessage,
               errorType
            }}
         />
      )
   }
}

export { SignInRoute }
