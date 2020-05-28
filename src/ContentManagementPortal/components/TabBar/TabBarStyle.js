import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../components/common/themes/colors';
const {
    darkBlueGrey,
    steel
} = colors;

export const TabBarView = styled.ul `
     display:flex;
     justify-content:space-around;
     align-items:center;
     width:1440px;
     height:50px;
     background-color:${colors.white};
     padding: 50px;
`,
    Tab = styled.li `
    width: 150px;
    height: 20px;
    text-align:center;
    padding-bottom:30px;
    font-family: HKGrotesk;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.12px;
    color:${props=>(props.border)? darkBlueGrey : steel};
    border-bottom:${props=>(props.border)?'1px solid black':''};
    transition-duration: 0.1s;
    transition-timing-function: linear;
`;
