import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { RoughSolutionComponent } from './EditorBoxStyle'
import { Header } from '../Header'
import { Editor } from '../Editor'

@observer
class EditorBox extends React.Component {
   render() {
      const {
         onRemoveEditorBox,
         editorBox,
         onChangeLanguageType,
         onChangeFileName,
         onChangeContent
      } = this.props
      return (
         <RoughSolutionComponent>
            <Header
               id={editorBox.id}
               editorBox={editorBox}
               onChangeFileName={onChangeFileName}
               onRemoveEditorBox={onRemoveEditorBox}
               onChangeLanguageType={onChangeLanguageType}
            />
            <Editor
               editorBox={editorBox}
               id={editorBox.id}
               mode={editorBox.languageType}
               onChangeContent={onChangeContent}
            />
         </RoughSolutionComponent>
      )
   }
}

export { EditorBox }
