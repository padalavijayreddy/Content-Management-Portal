import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Question } from '../Question';
import { RenderCodingQuestions, QuestionRow, SelectAllStyle, SelectAll, ExportSort, Select, SearchBart, Export, Sort, Sorting, Search, Questions, Header, SortingFunctions } from './RenderCodingQuestionsListStyle';
import { codingQuestions } from '../../../../CommonModule/i18n/strings';
import { withRouter } from 'react-router-dom';
import { SearchBar } from '../SearchBar';

@observer
class RenderCodingQuestionsList extends React.Component {

    renderCodingQuestionsList = () => {
        const { codingQuestions } = this.props;
        const codingQuestionsList = [...codingQuestions.values()];
        return codingQuestionsList.map((eachQuestion) => <Question key={eachQuestion.id} questionItem={eachQuestion} />);
    }

    addCodingQuestions = () => {
        const { history } = this.props;
        history.push('/Content-Management-Portal/create-coding-question/');
    }

    render() {
        const { addCodingQuestions } = this;
        const { onChangeSearchText } = this.props;
        console.log(onChangeSearchText, ",,,,");
        return (
            <RenderCodingQuestions>
                <SortingFunctions>
                    <SearchBart>
                      <SearchBar onChangeSearchText={onChangeSearchText}/>
                      <img src={codingQuestions.searchImageURL}/>
                    </SearchBart>
                    <ExportSort>
                        <Export>Export</Export>
                        <Select>
                            <option>Status</option>
                            <option>In Process</option>
                            <option>Yet to be Reveiwed</option>
                            <option>Completed</option>
                        </Select>
                        <Sort>
                            <img src={codingQuestions.sortImageURL}/>
                            <Sorting>Sort</Sorting>
                        </Sort>
                        <Sort>
                            <img src={codingQuestions.filterImageURL}/>
                            <Sorting>Filter</Sorting>
                        </Sort>
                    </ExportSort>
                </SortingFunctions>
                <SelectAll>
                    <input type="checkbox"/>
                    <SelectAllStyle>SelectAll</SelectAllStyle>
                </SelectAll>
                <QuestionRow>
                    <Questions>
                        <Header>Questions</Header>
                        <img src={codingQuestions.questionArrowImageURL} alt={codingQuestions.questionArrowImageAlt}/>
                    </Questions>
                    <Header>ROUGH SOLUTION</Header>
                    <Header>TEST CASES</Header>
                    <Header>PREFILLED CODE</Header>
                    <Header>SOLUTION APPROACH</Header>
                    <Header>CLEAN SOLUTION</Header>
                </QuestionRow>
                {this.renderCodingQuestionsList()}
                <button onClick={addCodingQuestions}>Add Coding Questions</button>
            </RenderCodingQuestions>
        );
    }
}

export default withRouter(RenderCodingQuestionsList);
