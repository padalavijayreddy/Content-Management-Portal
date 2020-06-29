import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { SolutionApproach } from '../../../../CommonModule/i18n/strings'
import { TitleView, TitleLabel, TitleInput } from './TitleStyle'

@observer
class Title extends React.Component {
   render() {
      const { title, onChangeTitle } = this.props
      return (
         <TitleView>
            <TitleLabel>{SolutionApproach.title}</TitleLabel>
            <TitleInput
               data-testid='Title'
               onChange={onChangeTitle}
               value={title}
               placeholder={SolutionApproach.titlePlaceholder}
            />
         </TitleView>
      )
   }
}

export { Title }
