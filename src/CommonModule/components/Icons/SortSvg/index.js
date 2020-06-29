import React, { Component } from 'react'
import SortSvgComponent from '../../SortSvgComponent'
import SvgFile from './SvgFile'

class SortSvg extends Component {
   render() {
      return <SortSvgComponent renderComponent={SvgFile} {...this.props} />
   }
}

export default SortSvg
