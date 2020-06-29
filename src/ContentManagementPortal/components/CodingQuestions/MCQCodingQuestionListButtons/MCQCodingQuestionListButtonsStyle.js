import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../CommonModule/components/styleGuide/Typos'

// export const McqButton = styled(Typo14DarkBlueGreyHKGroteskSemiBold)
// `
// `,

export const ButtonsList = styled.div`
      ${tw`w-full h-full`}
      background-color:#ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
   `,
   McqButton = styled.button`
      width: 220px;
      height: 40px;
      background-color: ${colors.lightBlueGrey24};
      ${tw`hover:bg-indigo-200`}
   `,
   CodingButton = styled.button`
      width: 220px;
      height: 40px;
      border: solid 1px ${colors.lightBlueGrey};
      background-color: ${colors.brightBlue};
      ${tw`hover:bg-blue-200`}
   `
