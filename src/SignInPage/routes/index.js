import React from 'react';

import { Route } from 'react-router-dom';

import { SIGN_IN_PATH } from '../constants/RouteConstants';

import { SignInRoute } from './SignInRoute';

export const AuthRoutes = [
    <Route
        key={Math.random().toString()}
        path={SIGN_IN_PATH}
        component = { SignInRoute }    
        />
];
