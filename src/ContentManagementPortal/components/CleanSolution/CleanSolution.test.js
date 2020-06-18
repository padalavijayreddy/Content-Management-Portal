/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { CleanSolution } from '.';
import { cleanSolution } from '../../../CommonModule/i18n/strings';

describe('CleanSolution', () => {
    it("should render addButton", () => {
        const { getAllByText, getByRole, debug } = render(
            <CleanSolution addCodeEditor={() => {}}/>
        );
        const addButton = getByRole("button", { name: "Add" });
        fireEvent.click(addButton);
        expect(getAllByText(/Language/i).length).toBe(3);
    });

    it("should render saveButton", () => {
        const { getAllByText, getByRole, debug } = render(
            <CleanSolution saveCleanSolutionList={() => {}}/>
        );
        const saveButton = getByRole("button", { name: "Save" });
        fireEvent.click(saveButton);
        expect(getAllByText(/Language/i).length).toBe(2);
    });
});
