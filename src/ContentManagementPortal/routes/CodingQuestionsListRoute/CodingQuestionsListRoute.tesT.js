/*
global expect
global jest

*/

import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
}
from "@ib/api-constants";


import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import { ContentManagementAPI } from "../../services/ContentManagementServices/ContentManagementAPI";
import { ContentManagementStores } from '../../stores/ContentManagementStores';
import CodingQuestionsListRoute from ".";


import { CODING_QUESTIONS_LIST_PATH } from '../../constants/RouteConstants/Navigation';
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation';
import { header } from '../../../CommonModule/i18n/strings';


const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
