import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../CommonModule/components/common/themes/colors';

export const PrefilledCodeView = styled.div `
     display:flex;
     flex-direction:column;
     width:1270px;
     height:1195px;
     background-color:${colors.white};
     padding:50px;
`,
    Buttons = styled.div `
     display:flex;
`,
    SaveButtonField = styled.div `
     display:flex;
     flex-direction:column;
     justify-content:flex-end;
     align-items:flex-end;
     height:100px;
`,
    ErrorMessage = styled.div `
     ${tw` text-red-800 text-xs italic`}
`;
