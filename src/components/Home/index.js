import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '../../SignInPage/constants/RouteConstants';
//import './HomePage.css';

class Home extends React.Component {

  render() {
    return (
      <div className="Home-navigation">
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to={SIGN_IN_PATH}>Content Management Portal</Link>
            </div>
        </div>
    );
  }
}


export default Home;
