export interface CodingQuestionObject {
   question_id: number
   short_title: string
   roughsolution: boolean
   testcase: boolean
   prefilledcode: boolean
   solutionapproach: boolean
   cleansolution: boolean
   hint: boolean
   index?: number
}

export interface CodingQuestionsListType {
   total_coding_questions: number
   question_details: Array<CodingQuestionObject>
}

export interface CodingQuestionDetailsResponse {
   question_id: number
}

export interface CodingQuestionDetails {
   question_details: problemStatement
   roughsolutions: Array<rough_solutions>
   testcases: Array<test_cases>
   prefilledcodes: Array<prefilled_codes>
   solutionapproaches: solution_approaches
   cleansolutions: Array<clean_solutions>
   hints: Array<hint>
}

export interface problemStatement {
   question_id: number
   short_title: string
   problem_description: Problem_Description
}

export interface Problem_Description {
   content_type: string
   content: string
}

export interface CodingQuestionsListRequestObjectProps {
   offset: number
   limit: number
}

export interface QuestionIdTypes {
   question_id: number
}

export interface rough_solutions {
   roughsolution_id: number
   code_type: string
   code: string
   filename: string
   delete_Id: number
}

export interface test_cases {
   input: string
   output: string
   is_hidden: boolean
   score: number
}

export interface prefilled_codes {
   prefilledcode_id: number
   code_type: string
   code: string
   filename: string
}

export interface solution_approaches {
   solutionapproach_id: number
   title: string
   description_content_type: string
   description_content: string
   complexity_analysis_content_type: string
   complexity_analysis_content: string
}

export interface clean_solutions {
   cleansolution_id: number
   code_type: string
   code: string
   filename: string
}

export interface hint {
   hint_id: number
   title: string
   content_type: string
   content: string
   order_id: number
}
