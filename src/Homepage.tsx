/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useEffect, useState} from 'react';
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from "./style";
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData} from './QuestionData';
import { Page } from "./Page";
import { PageTitle } from './PageTitle';
import { RouteComponentProps } from 'react-router-dom';
import { FC } from 'react';


export const Homepage:FC<RouteComponentProps> = ({history}) => {
    const [questions, setQuestions] = useState<QuestionData[] | null>(null);
    const [questionsLoading, setQuestionsLoading] = useState(true);
    

    useEffect(  () => {
        const doGetUnansweredQuestions = async () => {
        const unansweredQuestions = await getUnansweredQuestions();

        setQuestions(unansweredQuestions);
        setQuestionsLoading(false);
        }; 
          doGetUnansweredQuestions();

          

    }, []);
   const handleAskQuestionClick = () => {
       history.push("/ask");

    }

    return (
        <Page>
        <div css={css`
        margin: 50px auto 20px auto;
        padding: 30px 20px;
        max-width: 600px;
        `}>
            <div css={css`
display: flex;
align-items: center;
justify-content: space-between;
`}>
                
<PageTitle>
    Unanswered Questions
</PageTitle>
<PrimaryButton onClick = {handleAskQuestionClick}>Ask a question</PrimaryButton>
            </div>
             {questionsLoading ? (
<div css={css`
font-size: 16px;
font-style: italic;
`}
>
Loading...
</div>
) : <QuestionList data={questions || []}/> }
        </div>
        </Page>);
}
