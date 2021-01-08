import { QuestionData } from "./QuestionData";






interface QuestionsState {
    readonly loading: boolean;
    readonly unanswered: QuestionData[] | null;
    readonly postedResult?: QuestionData;
    } 
    
export interface AppState {
    readonly questions: QuestionsState;
    }