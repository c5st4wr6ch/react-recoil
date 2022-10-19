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

const textValue1 = atom({
	key: 'textValue2',
	default: 'defaulttext',
})

const charCount = selector({
	key: 'charCount12',
	get: ({get}) => {
		return get(textValue1).length;
	}
})

function Text() {
	
	const [text, setText] = useRecoilState(textValue1);

  const onInputChange = (event) => {
    setText(event.target.value);
	};
	return (
		<input type="text" value={text} onChange={onInputChange} />
	)
}

function CharacterCount22() {
	const count = useRecoilValue(charCount);
	const text = useRecoilValue(textValue);
  return (
    <div>
			{count}
			<Text />
		</div>
		
  );
}

export default CharacterCount22;
