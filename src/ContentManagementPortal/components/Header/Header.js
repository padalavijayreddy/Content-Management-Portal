import React from 'react'
import { TopBar, SignOutbutton } from './HeaderStyle'

class Header extends React.Component {
   render() {
      const { signOut } = this.props
      return (
         <TopBar>
            <img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b6ab9b82-4da7-42e9-805e-84b4527607fd.svg'></img>
            <SignOutbutton onClick={signOut}>Sign Out</SignOutbutton>
         </TopBar>
      )
   }
}

export { Header }
