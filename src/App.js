import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCount from './CharacterCount';
import CharacterCount22 from './CharacterCount22';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textValue = atom({
	key: 'textValue',
	default: 'defaulttext',
})

function PersistenceObserver() {
  useTransactionObservation_UNSTABLE(({atomValues, atomInfo, modifiedAtoms}) => {
    for (const modifiedAtom of modifiedAtoms) {
      Storage.setItem(
        modifiedAtom,
        JSON.stringify({value: atomValues.get(modifiedAtom)}),
      );
    }
  });
}

function App() {
  return (
    <RecoilRoot initializeState={initializeState}>
      {/* <PersistenceObserver /> */}
      <CharacterCount />
      <CharacterCount22 />
    </RecoilRoot>
  );
}

export default App;
