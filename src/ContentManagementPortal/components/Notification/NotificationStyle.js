import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../CommonModule/components/themes/colors'

const { white, brightBlue, lightBlueGrey, darkBlueGrey, black } = colors

export const NotificationField = styled.div`
   ${tw`flex`}
   height:60%;
   width: 100%;
   & * {
      margin: 2px;
   }
`

export const ImageContainerDiv = styled.div`
   ${tw`flex-1`}
`

export const Img = styled.img`
   ${tw`h-full w-full object-cover`}
`

export const NotificationText = styled.div`
   ${tw`flex items-center`}
`

export const InputContainerDiv = styled.div`
   ${tw`flex-1 flex flex-col justify-center pl-8`}
   & label {
      font-family: HKGrotesk;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.33;
      color: ${darkBlueGrey};
   }
   & input {
      font-family: HKGrotesk;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.6;
      color: ${black};
   }
`

export const Button = styled.button`
   ${tw`px-8 py-1 mt-8 mx-auto`}
   font-family: HKGrotesk;
   font-size: 16px;
   font-weight: 500;
   line-height: 1.5;
   border-radius: 4px;
   border: solid 1px ${lightBlueGrey};
   color: ${white};
   background-color: ${brightBlue};
`
