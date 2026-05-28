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
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  // 무엇을 작성해야하나요? => 스프링 부트 서버로 요청을 보내는 코드
  const [notices, setNotices] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    /*
    fetch("http://localhost/api/notices")
    .then((response) => response.json())
    .then((data) => console.log(data));
    */
    axios.get("http://localhost/api/notices").then((data) => {
      //console.log(data);
      setNotices(data.data);
    });
  }, []);
  return (
    <>
      <StyledWrap>
        <StyledTitle>공지사항</StyledTitle>

        <InnerWrap>
          {notices.length === 0 ? (
            <div>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
            </div>
          ) : (
            notices.map((e) => {
              return (
                <StyledCard
                  onClick={() => navi(`/notices/${e.noticeNo}`)}
                  $notice={e}
                  key={e.noticeNo}
                >
                  <StyledNo>{e.noticeNo}</StyledNo>
                  <StyledNoticeTitle>{e.noticeTitle}</StyledNoticeTitle>
                  <StyledWriter>{e.noticeWriter}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default NoticeList;
