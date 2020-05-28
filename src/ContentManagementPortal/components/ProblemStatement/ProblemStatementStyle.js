import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../components/common/themes/colors';

export const ProblemStatementView = styled.div `
     display:flex;
     flex-direction:column;
     width:1440px;
     height:1195px;
     background-color:${colors.white};
     padding-top:50px;
`,
    ProblemStatementMode = styled.div `
    display:flex;
`,
    CreateProblemStatement = styled.div `
    padding:40px;
    width: 710px;
    height: 670px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color:${colors.white}
`,
    CreatePreviewProblemStatement = styled.div `
    width: 710px;
    height: 670px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color: ${colors.lightBlueGrey};
`,
    SaveButtonField = styled.div `
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:100px;
`;
