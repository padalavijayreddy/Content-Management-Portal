import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../components/common/themes/colors'
const { steel, white, neonRed, neonRed5 } = colors

export const MainDiv = styled.div`
      position: relative;
      width: 1440px;
      height: 1024px;
      background-color: ${colors.iceBlue};
   `,
   SubDiv = styled.div`
      padding: 48px 0px;
      position: absolute;
      top: 168px;
      left: 452px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 536px;
      height: 687px;
      border-radius: 8px;
      background-color: ${colors.white};
   `,
   FieldsDiv = styled.div`
    & label{
        margin-top:24px;
    }
    & input{
        margin:bottom:24px;
    }
`,
   Image = styled.div`
      ${tw``}
   `,
   Logo = styled.img`
      ${tw``}
      width: 90px;
      height: 90px;
      object-fit: contain;
   `,
   SignUp = styled.pre`
      ${tw``}
      height: 40px;
      font-family: Rubik;
      font-size: 32px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: center;
      color: ${colors.darkBlueGrey};
   `,
   InputField = styled.input`
      ${tw``}
      padding:8px 16px;
      width: 320px;
      height: 40px;
      border-radius: 2px;
      border: solid 1px ${props => (props.isErrorPresent ? neonRed : steel)};
      background-color: ${props => (props.isErrorPresent ? neonRed5 : white)};
   `,
   InputLabelField = styled.label`
      ${tw``}
      height: 16px;
      font-family: HKGrotesk;
      font-size: 12px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: 0.12px;
      color: ${colors.steel};
   `,
   ErrorImageIcon = styled.img`
      width: 16px;
      height: 16px;
      object-fit: contain;
   `,
   ErrorMessageSpan = styled.span`
      height: 16px;
      font-family: HKGrotesk;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: ${neonRed};
   `,
   UsernameFieldContainerDiv = styled.div`
      display: flex;
      flex-direction: column;
   `,
   PasswordFieldContainerDiv = styled.div`
      display: flex;
      flex-direction: column;
   `

const SubmitButton = styled.div`
   ${tw` flex items-center justify-center mb-2`}
`
const Button = styled.button`
    {
      ${tw` flex justify-center text-center text-white rounded focus:outline-none focus:shadow-outline`}
      background:#0b69ff;
      padding: 8px 16px;
      width: 320px;
      height: 40px;
   }
`
const ErrorMessage = styled.div`
   ${tw` text-blue-500 text-xs italic`}
`
const Footer = styled.div`
   ${tw` flex justify-center text-xs`}
`
const NoAccount = styled.div`
   ${tw` text-center text-black`}
`
const AnchorTag = styled.a`
    {
      color: #0b69ff;
   }
`
export { SubmitButton, Button, ErrorMessage, Footer, NoAccount, AnchorTag }
