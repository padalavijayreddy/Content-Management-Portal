import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class PrefilledCode extends React.Component {
   render() {
      return <div>PrefilledCode</div>
   }
}

export { PrefilledCode }
