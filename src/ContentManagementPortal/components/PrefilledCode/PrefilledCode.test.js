/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { PrefilledCode } from '.';

describe('PrefilledCode', () => {
    it("should render addButton", () => {
        const { getAllByText, getByRole, debug } = render(
            <PrefilledCode addCodeEditor={() => {}}/>
        );
        const addButton = getByRole("button", { name: "Add" });
        fireEvent.click(addButton);
        expect(getAllByText(/Language/i).length).toBe(3);
    });

    it("should render saveButton", () => {
        const { getAllByText, getByRole, debug } = render(
            <PrefilledCode savePreFilledList={() => {}}/>
        );
        const saveButton = getByRole("button", { name: "Save" });
        fireEvent.click(saveButton);
        expect(getAllByText(/Language/i).length).toBe(2);
    });
});
