import { useState, useEffect } from 'react';

export default function App3() {
  const [counter, setValue] = useState(0);

  // useState => 상태관리, 화면 렌더링을 위한 Hook 함수(레퍼런스타입)
  // 함수의 주소값

  // 프로모티브타입 : 1, 2, 1.2, '한글' ...
  // 레퍼런스 타입 : 함수 주소값을 담을 수 있는 것(자바스크립트)

  const countUp = () => setValue(val => val + 1);
  const [keyword, setKeyword] = useState('');

  const runOnlyOnce = () => console.log('Once - 통신');
  useEffect(runOnlyOnce, []); // 첫 번째 방법
  // useEffect : 두 번째에 빈 배열([](뎁스?))을 넣어주면 딱 한 번만 실행한다.

  useEffect(() => { // 두 번째 방법(익명함수로 원하는 소스 넣기)
    console.log('키워드 검색');
  }, [keyword]) // => keyword 값이 변경 되었을 때만 실행한다.

  useEffect(() => {
    console.log('keyword or counter 변경');
  }, [keyword, counter]);

  const changeKeyword = (e) => setKeyword(e.target.value);

  return (
    <div>
      <h1>Counter</h1>
      <input type='search' value={keyword} onChange={changeKeyword} />
      <input type='search' value={keyword} onChange={changeKeyword} />
      {keyword}
      <h3>{counter}</h3>
      <button onClick={countUp}>click me</button>
    </div>
  );
}