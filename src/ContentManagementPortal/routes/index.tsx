import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute';
import { CodingQuestionsListRoute } from './CodingQuestionsListRoute';
import { CreateCodingQuestions } from '../components/CreateCodingQuestions';
import { ADD_CODING_QUESTION_PATH, CODING_QUESTION_DETAILS, CODING_QUESTIONS_LIST_PATH } from '../constants/RouteConstants/Navigation';


export const CodingQuestionsListRoutes = [
   <ProtectedRoute
      key={CODING_QUESTIONS_LIST_PATH}
      path={CODING_QUESTIONS_LIST_PATH}
      component={CodingQuestionsListRoute}
   />,
   <ProtectedRoute
   key = { ADD_CODING_QUESTION_PATH }
   path = {ADD_CODING_QUESTION_PATH }
   component = { CreateCodingQuestions }
   />
];

export const CodingQuestionDetails = [
   <ProtectedRoute
      key= {CODING_QUESTION_DETAILS}
      path= {CODING_QUESTION_DETAILS}
      component= {CreateCodingQuestions}
      />
];
