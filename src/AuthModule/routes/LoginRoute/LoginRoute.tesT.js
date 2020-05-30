/*
global expect
global jest
*/

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router, Route, withRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { createMemoryHistory } from 'history';

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
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      );

      const username = 'text-user';
      const usernameField = getByPlaceholderText('Username');
      const signInButton = getByRole('button', { name: 'Sign in' });

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.click(signInButton);
      getByText(/Please enter password/i);
   });

   // it('should submit sign-in on press enter', () => {
   //    const { getByPlaceholderText, getByLabelText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <LoginRoute authStore={authStore} />
   //       </Router>
   //    );

   //    const username = 'text-user';
   //    const password = 'text-password';

   //    const usernameField = getByTextId('Username');
   //    const passwordField = getByPlaceholderText('Password');
   //    const signInButton = getByRole('button', { name: 'Sign in' });

   //    fireEvent.change(usernameField, { target: { value: username } });
   //    fireEvent.change(passwordField, { target: { value: password } });
   //    fireEvent.keyPress(signInButton, { key: 'Enter', code: 'Enter' });

   //    waitFor(() => getByLabelText('audio-loading'));
   // });

   // it('should render signInRoute loading state ', async() => {
   //    const { getByPlaceholderText, getByLabelText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <LoginRoute authStore={authStore} />
   //       </Router>
   //    );

   //    const username = 'text-user';
   //    const password = 'text-password';

   //    const usernameField = getByPlaceholderText('Username');
   //    const passwordField = getByPlaceholderText('Password');
   //    const signInButton = getByRole('button', { name: 'Sign in' });

   //    const mockLoadingPromise = new Promise(function(resolve, reject) {});
   //    const mockSignInAPI = jest.fn();
   //    mockSignInAPI.mockReturnValue(mockLoadingPromise);
   //    authAPI.signInAPI = mockSignInAPI;

   //    fireEvent.change(usernameField, { target: { value: username } });
   //    fireEvent.change(passwordField, { target: { value: password } });
   //    fireEvent.keyPress(signInButton, { key: 'Enter', code: 'Enter' });

   //    waitFor(() => getByLabelText('audio-loading'));
   // });

   // it('should render signInRoute failure state', async() => {
   //    const { getByText, getByPlaceholderText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <LoginRoute authStore={authStore} />
   //       </Router>
   //    );

   //    const username = 'text-user';
   //    const password = 'text-password';

   //    const usernameField = getByPlaceholderText('Username');
   //    const passwordField = getByPlaceholderText('Password');
   //    const signInButton = getByRole('button', { name: 'Sign in' });

   //    const mockLoadingPromise = Promise.reject(new Error('server-error'));

   //    const mockSignInAPI = jest.fn();
   //    mockSignInAPI.mockReturnValue(mockLoadingPromise);
   //    authAPI.signInAPI = mockSignInAPI;

   //    //await authStore.userSignIn();
   //    fireEvent.change(usernameField, { target: { value: username } });
   //    fireEvent.change(passwordField, { target: { value: password } });
   //    fireEvent.click(signInButton);

   //    await waitFor(() => {
   //       getByText(/error/i);
   //    });
   // });

   // it('should render SignInRoute Success State', async() => {
   //    const history = createMemoryHistory();
   //    const route = LOGIN_PATH;
   //    history.push(route);

   //    const {
   //       getByPlaceholderText,
   //       getByRole,
   //       queryByRole,
   //       getByTestId
   //    } = render(
   //       <Provider authStore={authStore}>
   //          <Router history={history}>
   //             <Route path={SIGN_IN_PATH}>
   //                <LoginRoute />
   //             </Route>
   //             <Route path={PRODUCT_PAGE_PATH}>
   //                <LocationDisplay />
   //             </Route>
   //          </Router>
   //       </Provider>
   //    );

   //    const username = 'text-user';
   //    const password = 'text-password';

   //    const usernameField = getByPlaceholderText('Username');
   //    const passwordField = getByPlaceholderText('Password');
   //    const signInButton = getByRole('button', { name: 'Sign in' });

   //    const mockLoadingPromise = new Promise(function(resolve, reject) {
   //       resolve(getUserSignInResponse);
   //    });
   //    const mockSignInAPI = jest.fn();
   //    mockSignInAPI.mockReturnValue(mockLoadingPromise);
   //    authAPI.signInAPI = mockSignInAPI;

   //    fireEvent.change(usernameField, { target: { value: username } });
   //    fireEvent.change(passwordField, { target: { value: password } });
   //    fireEvent.click(signInButton);

   //    await waitFor(() => {
   //       expect(
   //          queryByRole('button', { name: 'Sign in' })
   //       ).not.toBeInTheDocument();
   //       expect(getByTestId('location-display')).toHaveTextContent(
   //          PRODUCT_PAGE_PATH
   //       );
   //    });
   // });
});




































// /*global jest, expect*/
// import React from 'react';
// import Cookie from 'js-cookie';
// import { Router, Route, withRouter } from 'react-router-dom';
// import { Provider } from 'mobx-react';
// import { createMemoryHistory } from 'history';
// import { render, fireEvent, waitFor } from '@testing-library/react';

// import { LOG_IN_PATH, HOME_PAGE } from '../../../constants/NavigationConstants';

// import { login } from '../../i18n/strings';
// import { AuthAPI } from '../../services/AuthServices/AuthAPI';
// import { LoginStore } from '../../stores/LoginStores';
// import getUserLoginResponse from '../../fixtures/getUserLoginResponse';
// import { LoginRoute } from '.';

// const LocationDisplay = withRouter(({ location }) => (
//     <div
//        data-testid='location-display'>
//        {location.pathname}
//     </div>
// ));

// const mockSetCookie = jest.fn(),
//     mockRemoveCookie = jest.fn();

// Cookie.set = mockSetCookie;
// Cookie.remove = mockRemoveCookie;

// describe('LoginRoute Tests', () => {

//     let authAPI, loginStore;
//     beforeEach(() => {
//        authAPI = new AuthAPI();
//        loginStore = new LoginStore(authAPI);
//     });

//     afterEach(() => jest.resetAllMocks());

//     it('should render local_invalid_username error message', () => {
//        const { getByText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                 <LoginRoute {...{loginStore}}/>
//             </Router>
//        );

//        const loginButton = getByRole('button', { name: login.login });
//        fireEvent.click(loginButton);
//        getByText(login.localUsernameError);
//     });

//     it('should render local_invalid_password error message', () => {
//        const { getByPlaceholderText, getByText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                 <LoginRoute {...{loginStore}}/>
//             </Router>
//        );

//        const usernameField = getByPlaceholderText(login.username),
//             loginButton = getByRole('button', { name: login.login });
//        fireEvent.change(usernameField, { target: { value: 'test-user' } });
//        fireEvent.click(loginButton);

//        getByText(login.localPasswordError);
//     });

//     it('should render LoginRoute loading state', async() => {
//        const { getByText, getByPlaceholderText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                    <LoginRoute {...{loginStore}}/>
//             </Router>
//        );
//        const usernameField = getByPlaceholderText(login.username),
//             passwordField = getByPlaceholderText(login.password),
//             loginButton = getByRole('button', { name: login.login }),
//             mockLoadingPromise = new Promise(() => {});

//        authAPI.loginAPI = jest.fn().mockReturnValue(mockLoadingPromise);
//        fireEvent.change(usernameField, { target: { value: 'test-user' } });
//        fireEvent.change(passwordField, { target: { value: 'test-password' } });
//        fireEvent.click(loginButton);

//        getByText(login.loadingText);
//        getByRole("button", { disabled: true });
//     });

//     it('should render network_invalid_username error message', async() => {
//        const { getByText, getByPlaceholderText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                 <LoginRoute loginStore={loginStore} />
//             </Router>
//        );

//        const usernameField = getByPlaceholderText(login.username),
//             passwordField = getByPlaceholderText(login.password),
//             loginButton = getByRole('button', { name: login.login }),
//             mockFailurePromise = new Promise((resolve, reject) => {
//                 reject(new Error(login.networkUsernameError));
//             });

//        authAPI.loginAPI = jest.fn().mockReturnValue(mockFailurePromise);
//        fireEvent.change(usernameField, { target: { value: 'test-user' } });
//        fireEvent.change(passwordField, { target: { value: 'test-password' } });
//        fireEvent.click(loginButton);

//        await waitFor(() => getByText(login.customNetworkUsernameError));
//     });
//     it('should render network_invalid_password error message', async() => {
//        const { getByText, getByPlaceholderText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                 <LoginRoute loginStore={loginStore} />
//             </Router>
//        );

//        const usernameField = getByPlaceholderText(login.username),
//             passwordField = getByPlaceholderText(login.password),
//             loginButton = getByRole('button', { name: login.login }),
//             mockFailurePromise = new Promise((resolve, reject) => {
//                 reject(new Error(login.networkPasswordError));
//             });

//        authAPI.loginAPI = jest.fn().mockReturnValue(mockFailurePromise);
//        fireEvent.change(usernameField, { target: { value: 'test-user' } });
//        fireEvent.change(passwordField, { target: { value: 'test-password' } });
//        fireEvent.click(loginButton);

//        await waitFor(() => getByText(login.customNetworkPasswordError));
//     });

//     it('should render LoginRoute failure state', async() => {
//        const { getByText, getByPlaceholderText, getByRole } = render(
//             <Router history={createMemoryHistory()}>
//                 <LoginRoute loginStore={loginStore} />
//             </Router>
//        );

//        const usernameField = getByPlaceholderText(login.username),
//             passwordField = getByPlaceholderText(login.password),
//             loginButton = getByRole('button', { name: login.login }),
//             customErrorMessage = 'server-error',
//             mockFailurePromise = new Promise((resolve, reject) => {
//                 reject(new Error(customErrorMessage));
//             });

//        authAPI.loginAPI = jest.fn().mockReturnValue(mockFailurePromise);
//        fireEvent.change(usernameField, { target: { value: 'test-user' } });
//        fireEvent.change(passwordField, { target: { value: 'test-password' } });
//        fireEvent.click(loginButton);

//        await waitFor(() => getByText(customErrorMessage));
//     });

//     it("should render LoginRoute success state", async() => {
//        const history = createMemoryHistory();
//        const route = LOG_IN_PATH;
//        history.push(route);
//        const { getByPlaceholderText, getByRole, getByTestId } = render(
//             <Provider {...{loginStore}}>
//                 <Router history={history}>
//                    <Route path={LOG_IN_PATH} component={LoginRoute}/>
//                    <Route path={HOME_PAGE} component={LocationDisplay}/> 
//                 </Router>
//             </Provider>
//        );

//        const username = "test-user";
//        const password = "test-password";

//        const usernameField = getByPlaceholderText(login.username);
//        const passwordField = getByPlaceholderText(login.password);
//        const loginButton = getByRole("button", { name: login.login });

//        const mockSuccessPromise = new Promise(function(resolve, reject) {
//             resolve(getUserLoginResponse);
//        });
//        const mockSignInAPI = jest.fn();
//        mockSignInAPI.mockReturnValue(mockSuccessPromise);
//        authAPI.loginAPI = mockSignInAPI;

//        fireEvent.change(usernameField, { target: { value: username } });
//        fireEvent.change(passwordField, { target: { value: password } });
//        fireEvent.click(loginButton);

//        await waitFor(() => {
//             expect(loginButton).not.toBeInTheDocument();
//             expect(getByTestId("location-display")).toHaveTextContent(HOME_PAGE);
//        });
//     });

// });
