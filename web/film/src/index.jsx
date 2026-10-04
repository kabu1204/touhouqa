import React from 'react';
import { registerRoot, Composition } from 'remotion';
import { Intro } from './Intro.jsx';

const Root = () => (
  <>
    <Composition id="Intro16" component={Intro} durationInFrames={450} fps={30} width={1920} height={1080} defaultProps={{ tag: '16x9' }} />
    <Composition id="Intro9" component={Intro} durationInFrames={450} fps={30} width={1080} height={1920} defaultProps={{ tag: '9x16' }} />
  </>
);
registerRoot(Root);
