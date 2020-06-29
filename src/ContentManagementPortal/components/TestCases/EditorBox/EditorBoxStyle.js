import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'

export const TestCasesComponent = styled.div`
      display: flex;
      flex-direction: column;
      width: 600px;
      height: 320px;
      background-color: #ffffff;
      margin-bottom: 10px;
   `,
   Header = styled.div`
      width: 37px;
      height: 24px;
      font-family: Rubik;
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 0.12px;
      color: ${colors.steel};
   `,
   IsHiddenCheck = styled.div`
      display: flex;
      align-items: center;
      width: 85px;
      height: 24px;
      background-color: ${colors.white};
      justify-content: space-between;
   `,
   Checkbox = styled.input`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      margin-bottom: 5px;
      border: 1px solid ${colors.steel};
   `,
   IsHidden = styled.div`
      color: black;
   `
