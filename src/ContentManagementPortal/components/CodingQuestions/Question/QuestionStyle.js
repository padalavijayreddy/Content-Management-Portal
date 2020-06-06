import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../../CommonModule/components/themes/colors'
import { Typo14SteelHKGroteskRegular } from '../../../../CommonModule/components/styleGuide/Typos';

export const QuestionStyle = styled(Typo14SteelHKGroteskRegular)
`
`,

QuestionsView = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width:1128px;
    height:64px;
    border: solid 1px ${colors.lightBlueGrey};
    ${tw`hover:bg-indigo-300`}
`,
    CircleTick = styled.img `
    width: 16px;
    height: 16px;
    border-radius: 100px;
    border: solid 1.5px ${colors.lightBlueGrey};
    padding:2px;
`,
    CircleField = styled.div `
    width:54px;
    height:54px;
    display:flex;
    align-items:center;
`,
    Field = styled.div `
    width:48px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
`,
    AllFields = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:770px;
    height:24px;
`,
    QuestionsField = styled.div `
    width: 280px;
    height: 48px;
    display:flex;
    align-items:center;
`;
