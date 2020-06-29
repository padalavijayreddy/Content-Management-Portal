import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { colors } from '../../../../CommonModule/components/themes/colors'
import { Typo14SteelHKGroteskRegular } from '../../../../CommonModule/components/styleGuide/Typos'

const { lightBlueGrey, brightBlue, white } = colors

const bounceOut = keyframes`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`

export const QuestionStyle = styled(Typo14SteelHKGroteskRegular)`
      ${tw`hover:text-white cursor-pointer`}
   `,
   QuestionsView = styled.div`
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 64px;
      border: solid 1px ${colors.lightBlueGrey};
      background-color: ${props => (props.odd ? 'white' : '#ebf8ff')};
      animation: ${props => (props.isRemoved ? bounceOut : '')} 1s linear 0s 1
         normal;
      ${tw`hover:bg-indigo-300`}
   `,
   CircleTick = styled.input`
      ${tw`cursor-pointer`}
      width:16px;
      height: 16px;
      padding: 2px;
   `,
   CircleField = styled.div`
      width: 54px;
      height: 54px;
      display: flex;
      align-items: center;
      padding-right: 2px;
   `,
   Field = styled.div`
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
   `,
   DeleteEditField = styled.div`
      ${tw`w-1/5`}
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
   `,
   ClickButton = styled.button`
      ${tw`m-2`}
   `,
   AllFields = styled.div`
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
   `,
   QuestionsField = styled.div`
      width: full;
      height: 48px;
      display: flex;
      align-items: center;
   `,
   Card = styled.div`
      ${tw``}
   `
