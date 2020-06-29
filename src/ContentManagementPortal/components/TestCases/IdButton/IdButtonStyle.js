import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'

export const IdbuttonStyle = styled.button`
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 6px;
      box-shadow: 0 8px 8px 0 ${colors.darkBlueGrey};
      border: solid 1px ${colors.brightBlue};
      background-color: ${colors.white};
      margin: 5px;
   `,
   DeleteButtonImg = styled.img`
      position: absolute;
      bottom: 27px;
      left: 25px;
   `
