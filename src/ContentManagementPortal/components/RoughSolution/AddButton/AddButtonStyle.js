import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../../CommonModule/components/common/themes/colors';
import { Typo14WhiteHKGroteskSemiBold } from '../../../../CommonModule/components/common/styleGuide/Typos';


export const Button = styled(Typo14WhiteHKGroteskSemiBold)
`
`,
Add = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  background-color: ${colors.greenishTeal};
  margin-right:5px;
`;
