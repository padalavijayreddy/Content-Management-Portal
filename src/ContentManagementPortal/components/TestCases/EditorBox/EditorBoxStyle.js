 import tw from 'tailwind.macro';
 import styled from '@emotion/styled';
 import { colors } from '../../../../CommonModule/components/common/themes/colors';

 export const TestCasesComponent = styled.div `
     display:flex;
     flex-direction:column;
     width: 764px;
     height: 320px;
     background-color: #ffffff;
     margin:10px;
`,
  Header = styled.div `
    width: 37px;
    height: 24px;
    font-family:Rubik;
    font-size:12px;
    font-weight:500;
    font-stretch:normal;
    font-style:normal;
    line-height:2;
    letter-spacing:0.12px;
    color: ${colors.steel};
`;
 