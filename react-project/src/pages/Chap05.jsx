import { useState } from "react";

const Chap05 = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("값을 입력해보세요~");

  const textHandler = (e) => {
    //console.log(e);
    setText(e.target.value);

    setMessage(
      e.target.value.length > 10 ? "너무 길어요" : "값을 입력해보세요~",
    );
  };
  return (
    <>
      <h3>입력값 받기</h3>
      <br />
      <br />
      <input
        className="bg-grey hover:bg-gray-200"
        type="text"
        onChange={textHandler}
        placeholder="여기에 입력"
      />

      <br />
      <br />
      <label>사용자가 입력한 값 : {text}</label>
      <br />
      <br />
      <label>안내 메시지 : {message}</label>
    </>
  );
};

export default Chap05;
