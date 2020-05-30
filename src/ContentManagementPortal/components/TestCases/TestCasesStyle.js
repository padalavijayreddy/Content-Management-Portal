import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../CommonModule/components/common/themes/colors';

export const TestCasesComponent = styled.div `
    display:flex;
    flex-direction:column;
    width: 1260px;
    height: 900px;
    background-color: #ffffff;
    padding:40px;
`,
    TestCasesView = styled.div `
    width: 1260 px;
    height: 100%;
    background-color: #ffffff;
    padding:40px;
`,
    SaveButtonField = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
    height:100px;
`;
