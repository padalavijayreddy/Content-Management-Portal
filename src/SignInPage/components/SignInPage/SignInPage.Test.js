/*global expect*/
import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { SignInPage } from '.'

describe('Signinform', () => {
   it('should render typed username', () => {
      const userName = 'test-user'
      const { getByPlaceholderText } = render(
         <SignInPage username={userName} onChangeUsername={() => {}} />
      )
      const usernameField = getByPlaceholderText('Username')
      expect(usernameField.value).toBe(userName)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByPlaceholderText } = render(
         <SignInPage password={password} onChangePassword={() => {}} />
      )

      const passwordField = getByPlaceholderText('Password')
      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(
         <SignInPage errorMessage='Invalid username' />
      )
      getByText(/invalid username/i)
   })
})
