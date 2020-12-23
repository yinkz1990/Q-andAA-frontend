
/** @jsxRuntime classic */
/** @jsx jsx */
//import { jsx } from 'theme-ui';
import { css, jsx } from '@emotion/core';
import React from 'react';
import Header from "./Header";
import {Homepage} from "./Homepage";
import { fontFamily, fontSize, gray2,} from './style';



const App: React.FC = () => {
  return (
  <div
  css={css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color:${gray2};
  `}
  >
      <header>
        <Header />
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
