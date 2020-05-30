/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { ProblemStatement } from '.';

describe('ProblemStatement', () => {
    it('should render typed ShortText', () => {
        const shortText = 'Nested Loops Concept';
        const { getByPlaceholderText, debug } = render(
            <ProblemStatement shortText={shortText} onChangeShortText={() => {}}/>
        );
        const ShortTextInput = getByPlaceholderText("Control loops and Nested loops");
        fireEvent.change(ShortTextInput, { target: { value: shortText } });
    });

    it('should render typed ShortText', () => {
        const selectedMode = 'HTML';
        const { getByTestId, debug } = render(
            <ProblemStatement selectedMode={selectedMode} handleChangeState={() => {}}/>
        );
        const ChangeMode = getByTestId("select-language");
        fireEvent.change(ChangeMode, { target: { value: selectedMode } });
    });

    // it('should render typed ShortText', () => {
    //     const problemDescription = 'Something';
    //     const { getByTestId, debug } = render(
    //         <ProblemStatement problemDescription={problemDescription} onChangeEditor={() => {}}/>
    //     );
    //     const ChangeValue = getByTestId("Editor");
    //     fireEvent.change(ChangeValue, problemDescription);
    //});


    it("should render shortText empty error message", () => {
        const { getByText, getByRole, debug } = render(
            <ProblemStatement saveTheProblem={() => {}}/>
        );
        const saveButton = getByRole("button", { name: "Save" });
        fireEvent.click(saveButton);
        getByText(/Please enter shortText/i);

    });

    it("should render problemDescription empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole, debug } = render(
            <ProblemStatement saveTheProblem={() => {}}/>
        );
        const shortText = "text-user";
        const ShortTextInput = getByPlaceholderText("Control loops and Nested loops");
        const saveButton = getByRole("button", { name: "Save" });

        fireEvent.change(ShortTextInput, { target: { value: shortText } });
        fireEvent.click(saveButton);
        getByText(/Please enter problemDescription/i);
    });

});
