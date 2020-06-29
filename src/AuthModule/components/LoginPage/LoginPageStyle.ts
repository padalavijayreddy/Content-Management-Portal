import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../CommonModule/components/themes/colors';
const { steel, white, neonRed, neonRed5 } = colors;

type InputProps={
   isErrorPresent:boolean
}

export const MainDiv = styled.div `
      ${tw`w-screen h-screen`}
      display:flex;
      justify-content:center;
      align-items:center;
      background-color: ${colors.iceBlue};
`,
   SubDiv = styled.div `
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: space-around;
      width: 400px;
      height: 500px;
      border-radius: 8px;
      background-color: ${colors.white};
      padding: 20px 30px 70px 30px ;
`,
   FieldsDiv = styled.div `
    & label{
        margin-top:24px;
    }
`,
   Image = styled.div `
      ${tw``}
`,
   Logo = styled.img `
      ${tw``}
      width: 60px;
      height: 60px;
      object-fit: contain;
`,
   SignUp = styled.pre `
      ${tw``}
      height: 40px;
      font-family: Rubik;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: center;
      color: ${colors.darkBlueGrey};
`,
   InputLabelField = styled.label `
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
   ErrorImageIcon = styled.img `
      width: 16px;
      height: 16px;
      display:flex;
      justify-content:center;
      align-items:center;
      self-align:center;
      object-fit: contain;
`,
   InputDiv = styled.div `
      display:flex;
      justify-content:space-between;
      align-items:center; 
      border-radius: 2px;
      width: 270px;
      height: 30px;
      border: solid 1px ${(props:any):string => (props.isErrorPresent ? neonRed : steel)};
      background-color: ${(props:any):string => (props.isErrorPresent ? neonRed5 : white)};
`,
   InputField = styled.input `
      width:90%;
      height:90%;
      font-size:12px;
      padding:5px;
      background-color:transparent;
      outline:none;
`,
   ErrorMessageSpan = styled.span `
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
   UsernameFieldContainerDiv = styled.div `
      display: flex;
      flex-direction: column;
`,
   PasswordFieldContainerDiv = styled.div `
      display: flex;
      flex-direction: column;
`,
   ErrorMessage = styled.div `
   ${tw` text-red-500 text-xs italic`}
`;


const SubmitButton = styled.div `
   ${tw` flex flex-col items-center justify-center mb-2`}
`;

const Button = styled.button `
    {
      ${tw` flex justify-center text-center text-white rounded focus:outline-none focus:shadow-outline`}
      background:#0b69ff;
      padding: 8px 16px;
      width: 270px;
      height: 40px;
   }
`;

const Footer = styled.div `
   ${tw` flex justify-center text-xs`}
`;

const NoAccount = styled.div `
   ${tw` text-center text-black`}
`;

const AnchorTag = styled.a `
    {
      color: #0b69ff;
    }
`;


export { SubmitButton, Button, Footer, NoAccount, AnchorTag };
