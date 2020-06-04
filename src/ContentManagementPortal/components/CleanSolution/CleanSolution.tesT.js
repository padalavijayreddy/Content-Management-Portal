/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { CleanSolution } from '.';
import { cleanSolution } from '../../../CommonModule/i18n/strings';

describe('CleanSolution', () => {
    // it('should render FileName', () => {
    //     const FileName = 'Loops';
    //     const { getAllByPlaceholderText, debug } = render(
    //         <CleanSolution onChangeFileName={() => {}}/>
    //     );
    //     const FileNameInput = getAllByPlaceholderText("File Name Include Extension");
    //     fireEvent.change(FileNameInput, { target: { value: FileName } });
    // });

    it('should render Language', () => {
        const selectedMode = 'HTML';
        const { getAllByTestId, debug } = render(
            <CleanSolution selectedMode={selectedMode} onChangeLanguageType={() => {}}/>
        );
        const ChangeMode = getAllByTestId("select-solution-language");
        fireEvent.change(ChangeMode, { target: { value: selectedMode } });
    });

    // it('should render Language', () => {
    //     const Content = 'HTML';
    //     const { getByTestId, debug } = render(
    //         <CleanSolution onChangeContent={() => {}}/>
    //     );
    //     const ChangeMode = getByTestId("select-solution-language");
    //     fireEvent.change(ChangeMode, { target: { value: Content } });
    // });
});
