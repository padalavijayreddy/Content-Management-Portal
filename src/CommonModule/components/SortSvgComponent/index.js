import React, { Component } from 'react'

class SortSvgComponent extends Component {
   render() {
      const { renderComponent: RenderComponent } = this.props
      return (
         <span>
            <RenderComponent />
         </span>
      )
   }
}

export default SortSvgComponent
