import React from 'react'
import { observer, Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import stores from './stores'
import Home from './components/Home'
import { AuthRoutes } from './SignInPage/routes'
import { CodingQuestionsListRoutes } from './ContentManagementPortal/routes'

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  {AuthRoutes}
                  {CodingQuestionsListRoutes}
                  <Route path='/'>
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
