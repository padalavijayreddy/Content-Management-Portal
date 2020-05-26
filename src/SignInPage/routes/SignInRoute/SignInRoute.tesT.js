/*
global expect
global jest
*/

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { SIGN_IN_PATH } from "../../constants/RouteConstants";
import { PRODUCT_PAGE_PATH } from "../../../ProductPage/constants/RouteConstants";
import { AuthAPI } from "../../services/AuthenticationService";
import { AuthStore } from "../../stores/AuthStore";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
import { SignInRoute } from ".";

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("SignInRoute Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    afterEach(() => jest.resetAllMocks());


    it("should render username empty error message", () => {

        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );

        const signInButton = getByRole("button", { name: "Sign in" });
        fireEvent.click(signInButton);
        getByText(/Please enter username/i);

    });

    it("should render password empty error message", () => {

        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={ createMemoryHistory() }> 
                <SignInRoute authStore={authStore} />
            </Router>
        );

        const username = "text-user";
        const usernameField = getByPlaceholderText("Username");
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
    });

    it("should submit sign-in on press enter", () => {

        const { getByPlaceholderText, getByLabelText, getByRole } = render(
            <Router history={ createMemoryHistory() }>
              <SignInRoute authStore={authStore}/>
            </Router>
        );

        const username = "text-user";
        const password = "text-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

        waitFor(() => getByLabelText("audio-loading"));
    });


    it("should render signInRoute loading state ", async() => {

        const { getByPlaceholderText, getByLabelText, getByRole } = render(
            <Router history={ createMemoryHistory() }>
                  <SignInRoute authStore={authStore}/>
                </Router>
        );

        const username = "text-user";
        const password = "text-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

        waitFor(() => getByLabelText("audio-loading"));
    });

    it("should render signInRoute failure state", async() => {

        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={ createMemoryHistory() }>
                    <SignInRoute authStore={authStore}/>
            </Router>
        );

        const username = "text-user";
        const password = "text-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockLoadingPromise = Promise.reject(new Error('server-error'));

        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        //await authStore.userSignIn();
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        await waitFor(() => {
            getByText(/error/i);
        });
    });

    it("should render SignInRoute Success State", async() => {
        const history = createMemoryHistory();
        const route = SIGN_IN_PATH;
        history.push(route);

        const { getByPlaceholderText, getByRole, queryByRole, getByTestId } = render(
            <Provider authStore={authStore}>
                <Router history={ history}>
                    <Route path = {SIGN_IN_PATH}> 
                        <SignInRoute />
                    </Route>
                    <Route path = {PRODUCT_PAGE_PATH}>
                        <LocationDisplay />
                    </Route>
                </Router>    
            </Provider>
        );

        const username = "text-user";
        const password = "text-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

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
            expect(queryByRole("button", { name: "Sign in" })).not.toBeInTheDocument();
            expect(getByTestId("location-display")).toHaveTextContent(PRODUCT_PAGE_PATH);
        });
    });

});
