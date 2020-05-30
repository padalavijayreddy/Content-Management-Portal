import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/common/themes/colors'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../CommonModule/components/common/styleGuide/Typos';

// export const McqButton = styled(Typo14DarkBlueGreyHKGroteskSemiBold)
// `
// `,
export const ButtonsList = styled.div `
    width: 1270px;
    background-color:#ffffff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px;
`,
    McqButton = styled.button `
    width: 220px;
    height: 40px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color: ${colors.lightBlueGrey24};
`,
    CodingButton = styled.button `
    width: 220px;
    height: 40px;
    border: solid 2px ${colors.lightBlueGrey};
    background-color: ${colors.brightBlue};
`;
