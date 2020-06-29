import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import AceEditor from 'react-ace'
import { EditorView } from './EditorStyle'

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'

@observer
class Editor extends React.Component {
   @observable description

   componentDidMount() {
      const { editorBox } = this.props
      if (editorBox) {
         this.description = editorBox.description
      } else {
         this.description = ''
      }
   }

   onChangeEditor = newValue => {
      const { onChangeInputContent, id } = this.props
      onChangeInputContent(newValue, id)
   }

   render() {
      const { id, mode } = this.props
      const mystyle = {
         color: 'black',
         width: '100%',
         height: '100%',
         padding: '10px',
         fontFamily: 'Arial'
      }
      return (
         <EditorView>
            <AceEditor
               value={this.description}
               style={mystyle}
               placeholder='Write Solution Description'
               mode='java'
               theme='textmate'
               name='blah2'
               data-testid='Editor'
               onChange={this.onChangeEditor}
               fontSize={16}
               showPrintMargin={true}
               showGutter={true}
               highlightActiveLine={true}
               setOptions={{
                  showLineNumbers: true,
                  tabSize: 2
               }}
            />
         </EditorView>
      )
   }
}

export { Editor }
