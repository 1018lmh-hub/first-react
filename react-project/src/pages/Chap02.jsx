import "./Chap02.css";
import { StyledP, StyledBludP } from "./Styles";

const Chap02 = () => {
  /*
    함수형 컴포넌트 사용 시 주의할 점

    1. 함수형 컴포넌트는 첫 글자가 대문자여야만 컴포넌트로 인식함
        만약 소문자로 작성하게 된다면 그냥 함수로 인식해서 랜더링 X
    2. 함수형 컴포넌트에서 return 시 반환할 ReactElement가 반드시 하나여야만 한다.
        만약 두개 이상이라면 반드시 하나의 부모요소로 감싸주어야 함
    3. 만약에 감쌀 태그가 존재하지 않는다면, 빈태그 <></>로 감싸주거나
        리액트에서 제공해주는 Fragment컴포넌트를 사용하면 됨!
*/

  return (
    <>
      <p style={{ color: "red", background: "black" }}>
        이 요소에 스타일을 입히고 싶은데
      </p>
      <p className="chap02">얘는 CSS파일을 이용해서 스타일 입히기</p>
      <p className="font-bold bg-blue-100 text-white rounded hover:bg-red-700">
        하이 나는 테인윈드야
      </p>
      <StyledP>나는 스타일 P태그얌 ㅎ</StyledP>
      <StyledBludP>나는 스타일 파랑이 P태그야 ㅎ</StyledBludP>
    </>
  );
};

export default Chap02;
