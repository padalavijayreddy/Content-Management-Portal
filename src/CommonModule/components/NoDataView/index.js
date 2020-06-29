import React from 'react'

import { NoDataViewContainer, NoDataViewText } from './styledComponents'

class NoDataView extends React.Component {
   render() {
      return (
         <NoDataViewContainer>
            <img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/081b4969-7476-42b1-9637-b07faa8e0920.svg' />
         </NoDataViewContainer>
      )
   }
}

export default NoDataView
