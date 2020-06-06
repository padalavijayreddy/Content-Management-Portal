/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { RoughSolution } from '.';

describe('RoughSolution', () => {
    it('should render FileName', () => {
        const FileName = 'Loops';
        const { getByPlaceholderText, debug } = render(
            <RoughSolution onChangeFileName={() => {}}/>
        );
        const FileNameInput = getByPlaceholderText("File Name Include Extension");
        fireEvent.change(FileNameInput, { target: { value: FileName } });
    });

    it('should render Language', () => {
        const selectedMode = 'HTML';
        const { getByTestId, debug } = render(
            <RoughSolution selectedMode={selectedMode} onChangeLanguageType={() => {}}/>
        );
        const ChangeMode = getByTestId("select-language");
        fireEvent.change(ChangeMode, { target: { value: selectedMode } });
    });

    it('should render Language', () => {
        const Content = 'HTML';
        const { getByTestId, debug } = render(
            <RoughSolution onChangeContent={() => {}}/>
        );
        const ChangeMode = getByTestId("select-language");
        fireEvent.change(ChangeMode, { target: { value: Content } });
    });
});
