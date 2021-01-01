/**@jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import { Page } from './Page';
import { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionData';

export const SearchPage:FC<RouteComponentProps> = ({location}) =>{
    const [questions, setQuestions] = useState<QuestionData[]>([]);

    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('criteria') || '';

    useEffect(() => {
        const doSearch = async (criteria: string) => {
        const foundResults = await searchQuestions(criteria);
        setQuestions(foundResults); };
        doSearch(search);
}, [search]);

    return (
        <Page title="Search Results">
        {search && (
           <Fragment> <p
            css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
            `}
            > for "{search}"
            </p>
            <QuestionList data={questions} />
            </Fragment>
            )}
        
        </Page>
        
    );
}
 