import {
  StyledWrap,
  StyledTitle,
  InnerWrap,
  StyledCard,
  StyledNo,
  StyledNoticeTitle,
  StyledWriter,
} from "./NoticeList.styles";
import axios from "axios";
import { useEffect, useState } from "react";

//Notice 테이블 조회 완
// Reply 테이블 조회 완
// Member테이블 조회해서 띄우기

const ReplyList = () => {
  // 무엇을 작성해야하나요? => 스프링 부트 서버로 요청을 보내는 코드
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    /*
    fetch("http://localhost/api/notices")
    .then((response) => response.json())
    .then((data) => console.log(data));
    */
    axios.get("http://localhost/api/replies").then((data) => {
      //console.log(data);
      setReplies(data.data);
    });
  }, []);
  return (
    <>
      <StyledWrap>
        <StyledTitle>댓글목록</StyledTitle>

        <InnerWrap>
          {replies.length === 0 ? (
            <div>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
            </div>
          ) : (
            replies.map((e) => {
              return (
                <StyledCard $notice={e} key={e.replyNo}>
                  <StyledNo>{e.replyNo}</StyledNo>
                  <StyledNoticeTitle>{e.replyContent}</StyledNoticeTitle>
                  <StyledWriter>{e.replyWriter}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default ReplyList;
