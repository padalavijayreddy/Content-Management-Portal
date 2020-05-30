import React from 'react'

import { Route } from 'react-router-dom'

import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute'

import { Coding_Questions_List_Path } from '../../CommonModule/constants/RouteConstants'

import { CodingQuestionsListRoute } from './CodingQuestionsListRoute'

export const CodingQuestionsListRoutes = [
   <ProtectedRoute
      key={Coding_Questions_List_Path}
      path={Coding_Questions_List_Path}
      component={CodingQuestionsListRoute}
   />
]
