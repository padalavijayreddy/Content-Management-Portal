import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../CommonModule/components/themes/colors';
import { Typo14SteelHKGroteskRegular } from '../../../CommonModule/components/styleGuide/Typos';

export const BackToListP = styled(Typo14SteelHKGroteskRegular)
`
`,
GoBackView = styled.div `
    padding:30px;
    padding-left:105px;
    ${tw`w-screen`}
    background-color: ${colors.white};
`,
    BackToListDiv = styled.div `
    display:flex;
    align-items:center;
    margin-bottom:20px
`,
    BackArrow = styled.img `
    width: 16px;
    height: 16px;
    object-fit: contain;
    padding-right:5px;
`,
    SelectedTaskDiv = styled.div `
    width: 207px;
    height: 32px;
    font-family: HKGrotesk;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color:${colors.darkBlueGrey};
`;
