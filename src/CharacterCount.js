import React from 'react';
import logo from './logo.svg';
import './App.css';

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

const charCount = selector({
	key: 'charCount',
	get: ({get}) => {
		return get(textValue).length;
	}
})

function TextCount12() {
	const [text, setText] = useRecoilState(textValue1);
	
	return (
		<div>{text}</div>
	) ;
}

function CharacterCount() {
	const count = useRecoilValue(charCount);
  return (
		
    <div>{count}
		<TextCount12 />
		</div>
  );
}

export default CharacterCount;
