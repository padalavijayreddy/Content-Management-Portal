import React, { Suspense } from 'react'
import { observer, Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import stores from './CommonModule/stores'
import Home from './CommonModule/components/Home'
import { AuthRoutes } from './AuthModule/routes'
import {
   CodingQuestionsListRoutes,
   CodingQuestionDetails
} from './ContentManagementPortal/routes'
import i18n from './i18n'

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <I18nextProvider i18n={i18n}>
               <Suspense fallback={<div />}>
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
               </Suspense>
            </I18nextProvider>
         </Provider>
      )
   }
}

export default App
