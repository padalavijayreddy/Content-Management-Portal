/*global expect*/

import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { LoginPage } from '.';

describe('Loginform', () => {
   it('should render typed username', () => {
      const userName = 'test-user';
      const { getByTextId } = render(
         <LoginPage username={userName} onChangeUsername={() => {}} />
      )
      const usernameField = getByTextId('Username')
      expect(usernameField.value).toBe(userName)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByPlaceholderText } = render(
         <loginPage password={password} onChangePassword={() => {}} />
      )

      const passwordField = getByPlaceholderText('Password')
      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(
         <LoginPage errorMessage='Invalid username' />
      )
      getByText(/invalid username/i)
   })
})
