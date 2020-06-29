import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import {
   HintView,
   SaveButtonField,
   HintsComponent,
   HintsIdList,
   Add
} from './HintsStyle'
import { EditorBox } from './EditorBox'
//import { SaveButton } from './SaveButton';
import { IdButton } from './IdButton'
import HintsModel from '../../models/HintsModel'

@observer
class Hints extends React.Component {
   @observable hintsList

   constructor(props) {
      super(props)
      this.init()
   }

   init() {
      this.hintsList = new Map()
   }

   componentDidMount() {
      this.addButton()
   }

   renderHints = () => {
      const hintsListOfArray = [...this.hintsList.values()]
      return hintsListOfArray.map(eachHint => {
         console.log('hints', hintsListOfArray)
         if (eachHint.isActive) {
            return (
               <EditorBox
                  key={eachHint}
                  id={eachHint.id}
                  eachHint={eachHint}
                  onChangeTitle={this.onChangeTitle}
                  onChangeDescription={this.onChangeTitle}
               />
            )
         }
         return null
      })
   }

   renderHintsIds = () => {
      const { makeActiveItem, deleteId } = this
      const hintsListOfArray = [...this.hintsList.values()]
      return hintsListOfArray.map((eachHint, index) => {
         return (
            <IdButton
               key={eachHint}
               id={eachHint.id}
               index={index}
               eachHint={eachHint}
               makeActiveItem={makeActiveItem}
               deleteId={deleteId}
            />
         )
      })
   }

   addButton = () => {
      console.log('Added')
      const hintsListOfArray = [...this.hintsList.values()]
      const editorObject = {
         hints_id: Math.random().toString(),
         title: '',
         description: '',
         isActive: true
      }
      hintsListOfArray.forEach(eachHint => {
         eachHint.isActive = false
      })
      this.hintsList.set(editorObject.hints_id, new HintsModel(editorObject))
   }

   deleteId = event => {
      console.log('delete', event.target.id)
      const id = event.target.id
      const hintsListOfArray = [...this.hintsList.values()]
      hintsListOfArray.forEach((eachTestcase, index) => {
         if (eachTestcase.id === id) {
            hintsListOfArray[index - 1].isActive = true
         }
      })
      // [...this.testCasesList.values()] = testCasesListOfArray;
      this.hintsList.delete(event.target.id)
   }

   makeActiveItem = event => {
      let id = event.target.id
      console.log(id)
      console.log('MakeActive')
      const hintsListOfArray = [...this.hintsList.values()]
      console.log('object 1', hintsListOfArray)
      hintsListOfArray.forEach(eachHint => {
         if (eachHint.id === id) {
            eachHint.isActive = true
         } else {
            eachHint.isActive = false
         }
      })
      console.log(hintsListOfArray)
   }

   onChangeTitle = (value, id) => {
      console.log('onChangeTitle')
      const { hintsList } = this
      const hintsListOfArray = [...hintsList.values()]
      hintsList.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.input = value
         }
      })
      hintsList.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.input)
      })
   }

   onChangeDescription = (value, id) => {
      console.log('onChangeDescription')
      const { hintsList } = this
      const hintsListOfArray = [...hintsList.values()]
      hintsListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.output = value
         }
      })
      hintsListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.output)
      })
   }

   render() {
      return (
         <HintsComponent>
            <HintsIdList>
               {this.renderHintsIds()}
               <Add
                  onClick={this.addButton}
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e15c2a28-6962-46d9-9835-03d6a61be3f7.svg'
               />
            </HintsIdList>
            <HintView>{this.renderHints()}</HintView>
         </HintsComponent>
      )
   }
}

export { Hints }
