import { useState, useEffect } from 'react';

export default function App4() {
  const [title, setTitle] = useState('hide');
  const [state, setState] = useState(true);

  const changeTitle = () => {
    setTitle(prev => prev === 'hide' ? 'show' : 'hide');
  };

  const changeState = () => {
    setState(prev => !prev);
  }

  return (
    <div>
      <button onClick={changeTitle}>{title}</button>
      <button onClick={changeState}>{state ? 'show' : 'hide'}</button>
      {state && <Hello />}
    </div>
  );
}

function Hello() {
  useEffect(() => {
    console.log('Created Hello :)')
  
    return () => {
      console.log('Destoryed Hello :(')
    }
  }, []);
  // 항상 새롭게 만들어진다는 것을 증명한다.

  return (
    <h1>Hello</h1>
  );
}