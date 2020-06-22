import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Question } from '../Question';
import { RenderCodingQuestions, QuestionRow, Footer, EditButton, AddButton, DeleteButton, SelectAllDiv, DeleteDiv, SelectAllStyle, SelectAll, ExportSort, Select, SearchBart, Export, Sort, Sorting, Search, Questions, Header, SortingFunctions } from './RenderCodingQuestionsListStyle';
import { withRouter } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import NoDataView from '../../../../CommonModule/components/NoDataView';
import { RenderCodingQuestionsStrings } from '../../../../CommonModule/i18n/strings';
import LoadingWrapperWithFailure from '../../../../CommonModule/components/LoadingWrapperWithFailure';
import { getLoadingStatus } from '@ib/api-utils';
import ReactPaginate from 'react-paginate';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


@observer
class RenderCodingQuestionsList extends React.Component {
    @observable selectType = "SELECT";
    @observable isChecked = false;

    onSelectSortBy = (event) => {
        const { value } = event.target;
        this.selectType = value;
        const { onChangeSortBy } = this.props;
        onChangeSortBy(value);
    }

    IsClickedSelectAll = () => {
        this.isChecked = !this.isChecked;
    }

    renderCodingQuestionsList = observer(({}) => {
        const { codingQuestions, deleteCodingQuestion, isMcqList } = this.props;
        const codingQuestionsList = [...codingQuestions.values()];
        if (codingQuestions.length === 0) {
            return <NoDataView/>;
        }
        else {
            if (isMcqList) return (<div>MCQLIST</div>);
            return codingQuestionsList.map((eachQuestion) => <Question key={eachQuestion.question_id} isChecked={this.isChecked} deleteCodingQuestion={deleteCodingQuestion} questionItem={eachQuestion} />);
        }
    });

    addCodingQuestions = () => {
        const { history } = this.props;
        history.push('/Content-Management-Portal/create-coding-question/');
    }

    render() {
        const { addCodingQuestions, renderCodingQuestionsList } = this;
        const {
            getProjectNameAPIStatus,
            onChangeSearchText,
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages,
            doNetworkCalls,
            codingQuestions,
            getCodingQuestionsListAPIStatus,
            getCodingQuestionsListAPIError,
            onPageChange,
            onDeleteAll
        } = this.props;
        return (
            <RenderCodingQuestions>
                <SortingFunctions>
                    <SearchBart>
                      <SearchBar onChangeSearchText={onChangeSearchText}/>
                      <img src={RenderCodingQuestionsStrings.searchImageURL}/>
                    </SearchBart>
                    <ExportSort>
                        <Export>{RenderCodingQuestionsStrings.Export}</Export>
                        <Select value={this.selectType} onChange={this.onSelectSortBy}>
                            <option value={RenderCodingQuestionsStrings.StatusValue}>{RenderCodingQuestionsStrings.Status}</option>
                            <option value={RenderCodingQuestionsStrings.InProcessValue}>{RenderCodingQuestionsStrings.InProcess}</option>
                            <option value={RenderCodingQuestionsStrings.YettobeReveiwedValue}>{RenderCodingQuestionsStrings.YettobeReveiwed}</option>
                            <option value={RenderCodingQuestionsStrings.CompletedValue}>{RenderCodingQuestionsStrings.Completed}</option>
                        </Select>
                        <Sort>
                            <img src={RenderCodingQuestionsStrings.sortImageURL}/>
                            <Sorting>{RenderCodingQuestionsStrings.Sort}</Sorting>
                        </Sort>
                        <Sort>
                            <img src={RenderCodingQuestionsStrings.filterImageURL}/>
                            <Sorting>{RenderCodingQuestionsStrings.Filter}</Sorting>
                        </Sort>
                    </ExportSort>
                </SortingFunctions>
                <SelectAll>
                    <SelectAllDiv>
                        <input checked={this.isChecked} onClick={this.IsClickedSelectAll} type="checkbox"/>
                        <SelectAllStyle>{RenderCodingQuestionsStrings.SelectAll}</SelectAllStyle>
                    </SelectAllDiv>
                    <DeleteDiv>
                        <EditButton disabled={!this.isChecked} state={this.isChecked}><MdEdit/>Edit</EditButton>
                        <DeleteButton disabled={!this.isChecked} onClick={onDeleteAll} state={this.isChecked}><MdDelete/> Delete All</DeleteButton>
                    </DeleteDiv>
                </SelectAll>
                <QuestionRow>
                    <Questions>
                        <Header>{RenderCodingQuestionsStrings.Questions}</Header>
                        <img src={RenderCodingQuestionsStrings.questionArrowImageURL} alt={RenderCodingQuestionsStrings.questionArrowImageAlt}/>
                    </Questions>
                    <Header>{RenderCodingQuestionsStrings.RoughSolution}</Header>
                    <Header>{RenderCodingQuestionsStrings.TestCases}</Header>
                    <Header>{RenderCodingQuestionsStrings.PrefilledCode}</Header>
                    <Header>{RenderCodingQuestionsStrings.SolutionApproach}</Header>
                    <Header>{RenderCodingQuestionsStrings.CleanSolution}</Header>
                    <Header>EDIT/DELETE</Header>
                </QuestionRow>
                <LoadingWrapperWithFailure 
                        apiStatus={getLoadingStatus(getCodingQuestionsListAPIStatus,getProjectNameAPIStatus)}
                        apiError={getCodingQuestionsListAPIError}
                        onRetryClick = {doNetworkCalls}                             
                        renderSuccessUI = {renderCodingQuestionsList}
                />
                <Footer>
                    <AddButton onClick={addCodingQuestions}>
                        <button> + Add Coding Questions</button>
                    </AddButton>
                    <AddButton>
                        <div>Page {currentPagePosition} of {totalCountOfPages}</div>
                    </AddButton>
                    {/*<ReactPaginate
                        previousLabel={<span>&#8249;</span>}
                        nextLabel={<span>&#8250;</span>}
                        nextLinkClassName='common-pagination-arrow-buttons'
                        previousLinkClassName='common-pagination-arrow-buttons'
                        breakLabel='...'
                        breakClassName='break-me'
                        pageCount={totalCountOfPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={onPageChange}
                        forcePage={currentPagePosition}
                    />*/}
                    <div class="flex justify-end items-center">
                    <button disabled={currentPagePosition===1} onClick={currentPagePositionDecrementor} class="flex items-center justify-center bg-black text-white w-8 h-8 mr-2 focus:outline-none">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                            </path>
                        </svg>
                    </button>
                    <p class="border border-black w-8 h-8 flex justify-center items-center">{currentPagePosition}</p>
                    <div class="mx-2"> / </div>
                    <p>{totalCountOfPages}</p>
                    <button disabled={currentPagePosition===totalCountOfPages} onClick={currentPagePositionIncrementor} class="flex items-center justify-center bg-black text-white w-8 h-8 ml-2 focus:outline-none ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z">
                            </path>
                        </svg>
                    </button>
                </div>
                </Footer>
            </RenderCodingQuestions>
        );
    }
}

export default withRouter(RenderCodingQuestionsList);
