import React from 'react'
import { IdbuttonStyle, DeleteButtonImg } from './IdButtonStyle'

class IdButton extends React.Component {
   render() {
      const {
         makeActiveItem,
         eachTestcase: { id },
         deleteId,
         index
      } = this.props
      return (
         <IdbuttonStyle onClick={() => makeActiveItem(id)}>
            <DeleteButtonImg
               onClick={e => {
                  e.stopPropagation()
                  deleteId(id)
               }}
               src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/876b2b58-913f-48dd-a9e9-d7059587ad68.svg'
            />
            {index + 1}
         </IdbuttonStyle>
      )
   }
}

export { IdButton }
