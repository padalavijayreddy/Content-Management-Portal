import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../components/common/themes/colors'

export const TopBar = styled.div`
      ${tw`flex justify-between px-2 py-1 m-3`}
      border-bottom: 1px solid black;
      width: 1440 px;
      height: 72 px;
      background-color: ${colors.white};
   `,
   SignOutbutton = styled.button`
      ${tw`border border-gray-800 m-2 h-10 w-24 p-1 rounded text-xs`}
   `
