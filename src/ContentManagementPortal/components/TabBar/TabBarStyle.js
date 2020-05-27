import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../components/common/themes/colors';

export const TabBarView = styled.ul `
     display:flex;
     justify-content:space-around;
     width:1440px;
     height:50px;
     background-color:${colors.white};
     border-bottom:1px solid black;
     padding: 50 px;
`,
    Tab = styled.li `
    width: 150px;
    height: 20px;
    font-family: HKGrotesk;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.12px;
    color: #171f46;
`;
