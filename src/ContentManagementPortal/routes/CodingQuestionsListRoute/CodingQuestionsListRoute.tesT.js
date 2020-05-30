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



// const LocationDisplay = withRouter(({ location }) => (
//     <div data-testid="location-display">{location.pathname}</div>
// ));

describe("LoginRoute Tests", () => {
    it('should render typed ShortText', () => {
        const selectedTask = 'Rough Solution';
        const { getByTestId, debug } = render(
            <CodingQuestionsListRoute selectedTask={selectedTask} changeSelectedTask={() => {}} />
        );
        const ChangeMode = getByTestId("Rough-solution");
        fireEvent.click(ChangeMode);
        expect(selectedTask).toBe('Rough Solution');
    });
});
