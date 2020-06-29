import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { CodingQuestionsList } from '../../components/CodingQuestionsList'
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation'
import { AuthStore } from '../../../AuthModule/stores/AuthStore'
import { ContentManagementStores } from '../../stores/ContentManagementStores'
import { History } from 'history'

interface CodingQuestionRouteProps {
   history: History
}

interface InjectedProps extends CodingQuestionRouteProps {
   authStore: AuthStore
   contentManagementStore: ContentManagementStores
}

@inject('authStore', 'contentManagementStore')
@observer
class CodingQuestionsListRoute extends React.Component<
   CodingQuestionRouteProps
> {
   @observable shouldDisplayCart

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
   }

   componentDidMount() {
      this.doNetworkCalls()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getContentManagementStore = () => {
      return this.getInjectedProps().contentManagementStore
   }

   getAuthStore = () => {
      return this.getInjectedProps().authStore
   }

   doNetworkCalls = () => {
      this.getContentManagementStore().getCodingQuestionsList()
   }

   toggleDisplayCart = () => {
      {
         this.shouldDisplayCart = this.shouldDisplayCart ? false : true
      }
   }

   onPageChange = value => {
      const {
         currentPagePositionUpdater,
         getCodingQuestionsList
      } = this.getContentManagementStore()
      console.log(value.selected)
      currentPagePositionUpdater(value.selected + 1)
      getCodingQuestionsList()
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      this.props.history.replace(LOGIN_PATH)
   }

   render() {
      const {
         saveUserData,
         postUserDataAPIError,
         questions, //codingQuestionsList
         onChangeSearchText,
         onChangeSortBy,
         saveRoughSolutionList,
         savePreFilledList,
         saveUserSolution,
         saveCleanSolutionList,
         selectedTask,
         changeSelectedTask,
         addButton,
         addCodingQuestion,
         getCodingQuestionsListAPIStatus,
         getCodingQuestionsListAPIError,
         currentPagePositionIncrementor,
         currentPagePositionDecrementor,
         currentPagePosition,
         totalCountOfPages,
         deleteCodingQuestion,
         onDeleteAll
      } = this.getContentManagementStore()
      const {
         signOut,
         doNetworkCalls,
         onPageChange,
         toggleDisplayCart,
         shouldDisplayCart
      } = this
      return (
         <CodingQuestionsList
            {...{
               toggleDisplayCart,
               shouldDisplayCart,
               onPageChange,
               currentPagePositionIncrementor,
               currentPagePositionDecrementor,
               currentPagePosition,
               totalCountOfPages,
               signOut,
               doNetworkCalls,
               getCodingQuestionsListAPIStatus,
               getCodingQuestionsListAPIError,
               addCodingQuestion,
               addButton,
               saveUserSolution,
               saveCleanSolutionList,
               saveRoughSolutionList,
               savePreFilledList,
               saveUserData,
               questions,
               onChangeSearchText,
               onChangeSortBy,
               selectedTask,
               changeSelectedTask,
               postUserDataAPIError,
               deleteCodingQuestion,
               onDeleteAll
            }}
         />
      )
   }
}

export { CodingQuestionsListRoute }
