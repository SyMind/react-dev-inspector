import React from 'react';
import { Global } from '@emotion/react';
import { Inspector } from 'react-dev-inspector';
import type { InspectParams } from 'react-dev-inspector';
import { Title } from './components/Title';
import { Slogan } from './components/Slogan';
import { KeyPad, Keypress } from './components/Keypress';
import * as S from './styles';
const projectRepo = 'https://github.com/zthxxx/react-dev-inspector';
const isDev = process.env.NODE_ENV === 'development';
export const HomePage = () => {
  return <React.StrictMode data-inspector-line="16" data-inspector-column="4" data-inspector-relative-path="layouts/index.tsx">
      <Inspector data-inspector-line="17" data-inspector-column="6" data-inspector-relative-path="layouts/index.tsx" disableLaunchEditor={!isDev} onClickElement={(inspect: InspectParams) => {
      console.debug(inspect);
      if (isDev || !inspect.codeInfo?.relativePath) return;
      const {
        relativePath,
        lineNumber
      } = inspect.codeInfo;
      window.open(`${projectRepo}/blob/master/examples/umi3/${relativePath}#L${lineNumber}`);
    }} />

      <Global data-inspector-line="34" data-inspector-column="6" data-inspector-relative-path="layouts/index.tsx" styles={S.globalCss} />

      <S.Base data-inspector-line="36" data-inspector-column="6" data-inspector-relative-path="layouts/index.tsx">
        <S.GithubCorner data-inspector-line="37" data-inspector-column="8" data-inspector-relative-path="layouts/index.tsx" href={projectRepo} />

        <Title data-inspector-line="41" data-inspector-column="8" data-inspector-relative-path="layouts/index.tsx">
          <span data-inspector-line="42" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">React Dev Inspector</span>
        </Title>

        <Slogan data-inspector-line="45" data-inspector-column="8" data-inspector-relative-path="layouts/index.tsx">
          <p data-inspector-line="46" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">Quick jump to local IDE source code directly from browser React component by just a simple click!</p>
          <p data-inspector-line="47" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx"><small data-inspector-line="47" data-inspector-column="13" data-inspector-relative-path="layouts/index.tsx">( for this prod online demo page, jump to GitHub file )</small></p>
        </Slogan>

        <KeyPad data-inspector-line="50" data-inspector-column="8" data-inspector-relative-path="layouts/index.tsx">
          <Keypress data-inspector-line="51" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">Ctrl ⌃</Keypress>
          +
          <Keypress data-inspector-line="53" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">Shift ⇧</Keypress>
          +
          <Keypress data-inspector-line="55" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">Command ⌘</Keypress>
          +
          <Keypress data-inspector-line="57" data-inspector-column="10" data-inspector-relative-path="layouts/index.tsx">C</Keypress>
        </KeyPad>
      </S.Base>
    </React.StrictMode>;
};
export default HomePage;