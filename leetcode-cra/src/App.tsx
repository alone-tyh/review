import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { findWords } from './script';
import findWOrds2 from './script/index2';
import { testData } from './testData/212-trie2';

function App() {

  useEffect(() => {
    console.log('啊啊啊')
    // const arg = testData[7]
    // console.log('参数', arg);
    // const res = findWOrds2(arg.bord, arg.word);
    // console.log('最终结果', res);
    console.time()
    testData.forEach((arg, index) => {
      console.log('参数', index, arg);
      const res = findWOrds2(arg.bord, arg.word);
      console.log('最终结果--' + index, res);
    })
    console.timeEnd()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
