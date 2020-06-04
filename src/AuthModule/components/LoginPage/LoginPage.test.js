/*global expect*/

import React, { Component } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginPage } from '.';
import { login } from '../../../CommonModule/i18n/strings';

describe('Loginform', () => {
   it("should render typed username", () => {
      const userName = "test-user";
      const { getByPlaceholderText } = render(
         <LoginPage username={userName} onChangeUsername={() => {}} />
      );
      const usernameField = getByPlaceholderText("Username");
      expect(usernameField.value).toBe(userName);
   });

   it("should render typed password", () => {
      const password = "test-password";
      const { getByPlaceholderText } = render(
         <LoginPage password={password} onChangePassword={() => {}} />
      );

      const passwordField = getByPlaceholderText("Password");
      expect(passwordField.value).toBe(password);
   });

   it('should render given error message', () => {
      const usernameErrorMessage = "Invalid Username";
      const { getByText, getByRole } = render(
         <LoginPage usernameErrorMessage={usernameErrorMessage} />
      );

      const signInButton = getByRole('button', { name: login.login });
      fireEvent.click(signInButton);
      getByText(login.invalidUsername);
   });

   // it('should render username empty error message', () => {
   //    const { getByText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <LoginRoute authStore={authStore} />
   //       </Router>
   //    );

   //    const signInButton = getByRole('button', { name: login.login });
   //    fireEvent.click(signInButton);
   //    getByText(login.invalidUsername);
   // });
});
