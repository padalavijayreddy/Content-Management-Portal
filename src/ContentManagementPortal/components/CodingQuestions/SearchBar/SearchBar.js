import React from 'react'
import { observer } from 'mobx-react'
import { Search } from './SearchBarStyle'

@observer
class SearchBar extends React.Component {
   handleSubmit = event => {
      const { onChangeSearchText } = this.props
      event.preventDefault()
      onChangeSearchText(event.target.value)
   }

   handleSearchText = event => {
      const { onChangeSearchText } = this.props
      onChangeSearchText(event.target.value)
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <Search
               onChange={this.handleSearchText}
               type='text'
               placeholder='Search with Name..'
            />
         </form>
      )
   }
}

export { SearchBar }
