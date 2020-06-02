/*
global expect
global jest
*/

import React, { Component } from 'react';
import { render, fireEvent, waitForr } from '@testing-library/react';
import { PrefilledCode } from '.';

describe('PrefilledCode', () => {
    it('should render FileName', () => {
        const FileName = 'Loops';
        const { getByPlaceholderText, debug } = render(
            <PrefilledCode onChangeFileName={() => {}}/>
        );
        const FileNameInput = getByPlaceholderText("File Name Include Extension");
        fireEvent.change(FileNameInput, { target: { value: FileName } });
    });

    it('should render Language', () => {
        const selectedMode = 'HTML';
        const { getByTestId, debug } = render(
            <PrefilledCode selectedMode={selectedMode} onChangeLanguageType={() => {}}/>
        );
        const ChangeMode = getByTestId("select-language");
        fireEvent.change(ChangeMode, { target: { value: selectedMode } });
    });

    it('should render Language', () => {
        const Content = 'HTML';
        const { getByTestId, debug } = render(
            <PrefilledCode onChangeContent={() => {}}/>
        );
        const ChangeMode = getByTestId("select-language");
        fireEvent.change(ChangeMode, { target: { value: Content } });
    });
});
