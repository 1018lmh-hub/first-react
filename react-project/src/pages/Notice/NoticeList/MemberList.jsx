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

//Notice 테이블 조회 완
// Reply 테이블 조회 완
// Member테이블 조회해서 띄우기

const MemberList = () => {
  // 무엇을 작성해야하나요? => 스프링 부트 서버로 요청을 보내는 코드
  const [members, setMembers] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios.get("http://localhost/api/members").then((data) => {
      //console.log(data);
      setMembers(data.data);
    });
  }, []);
  return (
    <>
      <StyledWrap>
        <StyledTitle>댓글목록</StyledTitle>

        <InnerWrap>
          {members.length === 0 ? (
            <div>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
            </div>
          ) : (
            members.map((e) => {
              return (
                <StyledCard
                  onClick={() => navi(`/members/${e.userId}`)}
                  $notice={e}
                  key={e.userId}
                >
                  <StyledNo>{e.userName}</StyledNo>
                  <StyledNoticeTitle>{e.userId}</StyledNoticeTitle>
                  <StyledWriter>{e.email}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default MemberList;
