import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'
import { Typo12SteelHKGroteskSemiBold, TextStyle9, Typo14SteelHKGroteskRegular } from '../../../../CommonModule/components/styleGuide/Typos';

export const Header = styled(Typo12SteelHKGroteskSemiBold)
`
`,
SelectAllStyle = styled(TextStyle9)
`
    margin-left:5px;
`,

SelectAll = styled.div `
    display:flex;
    width:100px;
    align-items:center;
    padding-left:10px;
    padding-bottom:10px;
`,
    RenderCodingQuestions = styled.div `
    ${tw`w-screen h-full`}
    background-color: ${colors.white};
    padding:40px;
`,
    QuestionRow = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:1128px;
    height:64px;
    border:solid 1px ${ colors.lightBlueGrey };
`,
    Questions = styled.div `
    display:flex;
    align-items:center;
    width: 280px;
    height: 48px;
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
    width:1128px;
    height:64px;
    margin-bottom:20px;
`,
    SearchBart = styled.div `
    display:flex;
    justify-content:space-between;
    padding:10px;
    border:1px solid ${colors.lightBlueGrey};
    width: 367px;
    height: 40px;
    margin:10px;
    ${tw`hover:border-black`}
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
    width:1128px;
    margin-top:5px;
`,
    AddButton = styled.div `
    display:flex;
    color:${colors.steel}
`,
    Sorting = styled.div `
    
`;