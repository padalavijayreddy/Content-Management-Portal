import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'
import { Typo12SteelHKGroteskSemiBold, TextStyle9, Typo14SteelHKGroteskRegular } from '../../../../CommonModule/components/styleGuide/Typos';
const { steel, white, neonRed, neonRed5 } = colors;

export const Header = styled(Typo12SteelHKGroteskSemiBold)
`
`,
SelectAllStyle = styled(TextStyle9)
`
    margin-left:5px;
`,
SelectAll = styled.div `
    display:flex;
    height:64px;
    align-items:center;
    padding-left:10px;
    padding-bottom:10px;
    justify-content:space-between
`,
    SelectAllDiv = styled.div `
    display:flex;
    align-items:center;
`,
    DeleteDiv = styled.div `
    display:flex;
    align-items:center;
`,
    DeleteButton = styled.button `
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: solid 1px ${props => (props.state ? neonRed : white)};
    ${tw`hover:bg-red-200 hover:text-black rounded-lg`}
    color: ${colors.white};
    background:${props => (props.state? neonRed : "transparent")};
    pointer-events:${props => (props.state?"auto":"none")};
    width:120px;
    height:50px;
    padding:5px;
`,
    EditButton = styled.button `
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: solid 1px ${props => (props.state ? "green" : white)};
    ${tw`hover:bg-green-200 hover:text-black m-2 rounded-lg`}
    color: ${colors.white};
    background:${props => (props.state? "green" : "transparent")};
    pointer-events:${props => (props.state?"auto":"none")};
    width:80px;
    height:50px;
    padding:5px;
`,
    RenderCodingQuestions = styled.div `
    ${tw`w-full min-h-screen flex flex-col`}
    background-color: ${colors.white};
    padding:40px;
`,
    QuestionRow = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:64px;
    border:solid 1px ${ colors.lightBlueGrey };
`,
    Questions = styled.div `
    display:flex;
    align-items:center;
    width: 280px;
    height: 48px;
    padding-left:60px;
    font-family: HKGrotesk;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: ${colors.steel};
`,
    SortingFunctions = styled.div `
    display:flex;
    justify-content:space-between;
    height:64px;
    margin-bottom:20px;
`,
    SearchBart = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    border:1px solid ${colors.lightBlueGrey};
    width: 367px;
    height: 40px;
    margin:10px;
    background-color:${colors.white};
    ${tw`hover:border-black hover:bg-orange-100`}
`,
    ExportSort = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:480px;
`,
    Select = styled.select `
    display:flex;
    self-align:center;
    width: 118px;
    height: 40px;
    border: 1px solid ${colors.lightBlueGrey};
    ${tw`hover:border-black`}
`,
    Export = styled.div `
    width: 118px;
    height: 40px;
    border-radius: 4px;
    background-color: green;
    justify-content:center;
    align-items:center;
    text-align:center;
    self-align:center;
    padding-top:5px;
    ${tw`hover:border-black`}
`,
    Sort = styled.div `
    display:flex;
    width:60px;
    height:40px;
    justify-content:space-around;
    align-items:center;
`,
    Footer = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:5px;
`,
    AddButton = styled.div `
    display:flex;
    color:${colors.steel}
`,
    Sorting = styled.div `
    
`;
