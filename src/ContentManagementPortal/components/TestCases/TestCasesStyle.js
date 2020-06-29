import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'

export const TestCasesComponent = styled.div`
      display: flex;
      flex-direction: column;
      width: 1260px;
      height: 900px;
      background-color: #ffffff;
      padding: 40px;
   `,
   TestCasesView = styled.div`
      width: 1260px;
      height: 1000px;
      background-color: #ffffff;
      margin-top: 20px;
   `,
   SaveButtonField = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      height: 100px;
   `,
   TestCasesIdList = styled.div`
      display: flex;
      padding: 10px;
      align-items: center;
      margin: 5px;
   `,
   Add = styled.img`
      border-radius: 50px;
      border: 1px solid black;
      padding: 2px;
      height: 15px;
      width: 15px;
   `
