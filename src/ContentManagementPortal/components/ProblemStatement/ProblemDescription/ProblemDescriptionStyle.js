import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../../CommonModule/components/themes/colors';
import { Typo12HKGroteskSemiBoldSteel } from '../../../../CommonModule/components/styleGuide/Typos';

export const ProblemDescriptionView = styled.div `
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:space-around;
     margin-top:20px;
`,
     ProblemDescriptionTextarea = styled.textarea `
     width: 600px;
     height: 320px;
     border-radius: 4px;
     border: solid 1px ${colors.lightBlueGrey};
     background-color: ${colors.white};
`,
     ProblemDescriptionLabel = styled(Typo12HKGroteskSemiBoldSteel)
`
`;
