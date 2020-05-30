import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../../CommonModule/components/common/themes/colors';
import { Typo12HKGroteskSemiBoldSteel } from '../../../../CommonModule/components/common/styleGuide/Typos';

export const ShortTextLabel = styled(Typo12HKGroteskSemiBoldSteel)
`
`,
ShortTextView = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:space-around;
`,
    ShortTextInput = styled.input `
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid grey;
    border-radius: 4px;
    box-sizing: border-box;
`;
