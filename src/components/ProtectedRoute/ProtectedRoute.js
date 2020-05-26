import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken } from '../../utils/StorageUtils';
import { SIGN_IN_PATH } from '../../SignInPage/constants/RouteConstants';

export const ProtectedRoute = (props) => {
    const { component: Component, ...others } = props;
    return (getAccessToken()) ? <Route component={Component} {...others}/> : <Redirect to={{pathname: SIGN_IN_PATH }}/>;
};
