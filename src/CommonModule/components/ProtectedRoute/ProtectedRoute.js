import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../utils/StorageUtils'
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation'

export const ProtectedRoute = props => {
   const { component: Component, ...others } = props
   return getAccessToken() ? (
      <Route component={Component} {...others} />
   ) : (
      <Redirect to={{ pathname: LOGIN_PATH }} />
   )
}
