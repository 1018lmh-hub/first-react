import { useState, useEffect } from "react";

const UseHook = () => {
  const [num, setNum] = useState(100);

  const minus = () => {
    // setNum(num - 1);
    // setNum(num - 1);
    // setNum(num - 1);

    //실무규칙 : 새 state가 이전 state에 의존하면 무조건 함수형을 써라
    setNum((num) => num - 1);
    // setNum((num) => num - 1);
    // setNum((num) => num - 1);
    //setNum(function(num) {return num - 1});
  };

  useEffect(() => {
    alert("하이룽~");
  }, [num]);
  /*
    이 컴포넌트가 첫 렌더링(MOUNT), 재렌더링(UPDATE) 될 때 무언가 수행하고 싶다.

    useEffect Hook
    
    두번째 인자로 의존성 배열을 전달하는데

    []==> 첫 렌더링 때만 수행

    [state, state, state] => 각각의 state의 변화가 일어날 때 (set) effect를 수행
  */

  /*
        Hook 사용 시 주의사항
        -Hook은 함수형 컴포넌트 최상위 블럭에서만 사용 가능(반복, 조건, 함수 내부에서 호출안됨)
        -함ㅁ수형 컴포넌트에서만 사용가능
    */

  return (
    <>
      <h1>{num}</h1>
      <p>
        <button onClick={minus}>감소감소감소ㅗㅗㅗ브튼</button>
      </p>
    </>
  );
};

export default UseHook;
