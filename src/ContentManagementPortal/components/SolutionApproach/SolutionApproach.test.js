/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { SolutionApproach } from '.';

describe('SolutionApproach', () => {
    it('should render typed title', () => {
        const title = 'Nested Loops Concept';
        const { getByPlaceholderText, debug } = render(
            <SolutionApproach title={title} onChangeTitle={() => {}} />
        );
        debug();
        const TitleInput = getByPlaceholderText("Ex.luke S");
        fireEvent.change(TitleInput, { target: { value: title } });
    });


    it("should render shortText empty error message", () => {
        const { getByText, getByRole, debug } = render(
            <SolutionApproach saveTheProblem={() => {}}/>
        );
        debug();
        const saveButton = getByRole("button", { name: "Save" });
        fireEvent.click(saveButton);
        getByText(/Please enter title/i);
    });

    it("should render problemDescription empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole, debug } = render(
            <SolutionApproach saveTheProblem={() => {}}/>
        );
        const title = "text-user";
        const titleInput = getByPlaceholderText("Ex.luke S");
        const saveButton = getByRole("button", { name: "Save" });

        fireEvent.change(titleInput, { target: { value: title } });
        fireEvent.click(saveButton);
        getByText(/Please enter description/i);
    });

});
