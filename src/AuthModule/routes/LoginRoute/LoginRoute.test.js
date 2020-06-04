/*
global expect
global jest
*/

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router, Route, withRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { createMemoryHistory } from 'history';

import { CODING_QUESTIONS_LIST_PATH } from '../../../ContentManagementPortal/constants/RouteConstants/Navigation';
import { LOGIN_PATH } from '../../constants/RouteConstants/Navigation';
import { AuthAPI } from '../../services/AuthenticationService';
import { AuthStore } from '../../stores/AuthStore';
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json';
import { LoginRoute } from '.';
import { login } from '../../../CommonModule/i18n/strings';

const LocationDisplay = withRouter(({ location }) => (
   <div
      data-testid='location-display'>
      {location.pathname}
   </div>
));

describe('LogInRoute Tests', () => {
   let authAPI;
   let authStore;

   beforeEach(() => {
      authAPI = new AuthAPI();
      authStore = new AuthStore(authAPI);
   });

   afterEach(() => jest.resetAllMocks());

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
               <LoginRoute authStore={authStore} />
         </Router>
      );

      const signInButton = getByRole('button', { name: login.login });
      fireEvent.click(signInButton);
      getByText(login.invalidUsername);
   });

   it('should render password empty error message', () => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      );

      const username = 'text-user';
      const usernameField = getByTestId('username');
      const signInButton = getByRole('button', { name: login.login });

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.click(signInButton);
      getByText(login.invalidPassword);
   });

   it('should render signInRoute loading state ', async() => {
      const { getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      );

      const username = 'text-user';
      const password = 'text-password';

      const usernameField = getByTestId('username');
      const passwordField = getByTestId('password');
      const signInButton = getByRole('button', { name: login.login });

      const mockLoadingPromise = new Promise(function(resolve, reject) {});
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
   });

   it('should render signInRoute failure state', async() => {
      const { getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      );

      const username = 'text-user';
      const password = 'text-password';

      const usernameField = getByTestId('username');
      const passwordField = getByTestId('password');
      const signInButton = getByRole('button', { name: login.login });

      const mockLoadingPromise = Promise.reject(new Error('server-error'));

      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
   });

   it('should render SignInRoute Success State', async() => {
      const history = createMemoryHistory();
      const route = LOGIN_PATH;
      history.push(route);

      const {
         getByRole,
         queryByRole,
         getByTestId
      } = render(
         <Provider authStore={authStore}>
               <Router history={history}>
                  <Route path={LOGIN_PATH}>
                     <LoginRoute />
                  </Route>
                  <Route path={CODING_QUESTIONS_LIST_PATH}>
                     <LocationDisplay />
                  </Route>
               </Router>
            </Provider>
      );

      const username = 'text-user';
      const password = 'text-password';

      const usernameField = getByTestId('username');
      const passwordField = getByTestId('password');
      const signInButton = getByRole('button', { name: login.login });

      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse);
      });
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);

      await waitFor(() => {
         expect(
            queryByRole('button', { name: 'Sign in' })
         ).not.toBeInTheDocument();
         expect(getByTestId('location-display')).toHaveTextContent(
            CODING_QUESTIONS_LIST_PATH
         );
      });
   });
});
