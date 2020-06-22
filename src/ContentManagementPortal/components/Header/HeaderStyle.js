import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'

export const TopBar = styled.div `
      ${tw`flex justify-between`}
      border-bottom: 1px solid lightgrey;
      ${tw`w-full`}
      height:72px;
      background-color: ${colors.white};
`,
   SignOutbutton = styled.img `
      ${tw`border-gray-800 m-2 cursor-pointer h-12 w-12 p-1 rounded text-xs`}
      border-radius:50%;
`,
   NotificationIcon = styled.img `
   width: 25px;
   height: 25px;
`,
   HeaderNotify = styled.div `
   display:flex;
   width:120px;
   justify-content:space-between;
   align-items:center;
`;
