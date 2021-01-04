
/** @jsxRuntime classic */
/** @jsx jsx */
//import { jsx } from 'theme-ui';
import { css, jsx } from '@emotion/core';
import React from 'react';
import {HeaderWithRouter} from "./Header";
import {Homepage} from "./Homepage";
import { fontFamily, fontSize, gray2,} from './style';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {SignInPage} from "./SignInPage";
import {SearchPage}  from "./SearchPage";
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { lazy, Suspense } from 'react';

//must be the last import
const AskPage = lazy(() => import('./AskPage'));


const App: React.FC = () => {
  return (
    <BrowserRouter>
  <div
  css={css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color:${gray2};
  `}
  >
      <header>
        <HeaderWithRouter  />
        <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/ask">
                <Suspense
                fallback={<div
                css={css`
                margin-top: 100px;
                text-align: center;`}
                >
                Loading...
                </div>}>
                <AskPage />
                </Suspense>
        </Route>
        <Route path="/signin" component={SignInPage} />
        <Route path="/questions/:questionId" component = {QuestionPage} />
        <Route component = {NotFoundPage}/>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
