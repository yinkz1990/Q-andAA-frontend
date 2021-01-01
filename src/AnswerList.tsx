
/**@jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Answer } from './Answer';
import { FC } from 'react';
import { AnswerData } from './QuestionData';
import { gray5 } from './style';


interface Props {
    data: AnswerData[];
    }

    export const AnswerList: FC<Props> = ({ data }) => {
        return (
        <ul
        css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0;`}
        >
        {data.map(answer => (
        <li
        css={css`
        border-top: 1px solid ${gray5};
        `}
        key={answer.answerId}
        >
        <Answer data={answer} />
        </li>
        ))}
        </ul>
        )};