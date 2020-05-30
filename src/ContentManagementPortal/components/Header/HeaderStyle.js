import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/common/themes/colors'

export const TopBar = styled.div `
      ${tw`flex justify-between`}
      border-bottom: 1px solid lightgrey;
      width:1270px;
      height:72px;
      background-color: ${colors.white};
`,
   SignOutbutton = styled.img `
      ${tw`border-gray-800 m-2 h-12 w-12 p-1 rounded text-xs`}
      border-radius:50%;
`;
