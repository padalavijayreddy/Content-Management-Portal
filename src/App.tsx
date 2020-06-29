import React from 'react'
import { observer, Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import stores from './CommonModule/stores'
import Home from './CommonModule/components/Home'
import { AuthRoutes } from './AuthModule/routes'
import {
   CodingQuestionsListRoutes,
   CodingQuestionDetails
} from './ContentManagementPortal/routes'

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  {AuthRoutes}
                  {CodingQuestionsListRoutes}
                  {CodingQuestionDetails}
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
