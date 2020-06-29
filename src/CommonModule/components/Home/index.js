import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation'
import './Home.css'

class Home extends React.Component {
   render() {
      return (
         <div className='Home-navigation'>
            <div>
               <Link
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                  to={LOGIN_PATH}
               >
                  Content Management Portal
               </Link>
            </div>
            <div>
               <Link
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                  to={LOGIN_PATH}
               >
                  Practice Project
               </Link>
            </div>
         </div>
      )
   }
}

export default Home
