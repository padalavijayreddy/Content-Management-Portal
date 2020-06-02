import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute';
import { Coding_Questions_List_Path } from '../../CommonModule/constants/RouteConstants';
import { CodingQuestionsListRoute } from './CodingQuestionsListRoute';
import { CreateCodingQuestions } from '../components/CreateCodingQuestions';
import { Add_Coding_Questions_Path, Coding_Question_Details } from '../constants/RouteConstants/Navigation';


export const CodingQuestionsListRoutes = [
   <ProtectedRoute
      key={Coding_Questions_List_Path}
      path={Coding_Questions_List_Path}
      component={CodingQuestionsListRoute}
   />,
   <ProtectedRoute
   key = { Add_Coding_Questions_Path }
   path = { Add_Coding_Questions_Path }
   component = { CreateCodingQuestions }
   />
];

export const CodingQuestionDetails = [
   <ProtectedRoute
      key= {Coding_Question_Details}
      path= {Coding_Question_Details}
      component= {CreateCodingQuestions}
      />
];
