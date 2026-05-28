import {
  InnerWrap,
  StyledNo,
  StyledTitle,
  StyledWrap,
  StyledWriter,
} from "../NoticeList/NoticeList.styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MemberDetail = () => {
  //localhost/api/members/회원아이디로 요청 보내는 코드
  const { id } = useParams();
  //alert(id);
  const [member, setMember] = useState({
    userId: "",
    userPwd: "",
    userName: "",
    email: "",
    enrollDate: "",
    modifyDate: "",
    status: "",
  });

  const [load, isLoad] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/api/members/${id}`).then((res) => {
      console.log(res);
      const obj = res.data;
      setMember({
        userId: obj.userId,
        userPwd: obj.userPwd,
        userName: obj.userName,
        enrollDate: obj.enrollDate,
        modifyDate: obj.modifyDate,
        status: obj.status,
      });
      isLoad(true);
    });
  }, [id]);

  if (!load) {
    return (
      <StyledWrap>
        <StyledTitle>회원 정보를 조회 중 입니다...</StyledTitle>
      </StyledWrap>
    );
  }
  return (
    <>
      <StyledWrap>
        <InnerWrap>
          <StyledTitle>{member.userName}님의 정보</StyledTitle>
          <StyledWriter>아이디 {member.userId}: </StyledWriter>
          <StyledWriter>비밀번호 : {member.userPwd}</StyledWriter>
          <StyledWriter>가입일 : {member.enrollDate}</StyledWriter>
          <StyledWriter>정보수정일 : {member.modifyDate}</StyledWriter>
          <StyledNo>회원상태 : {member.status}</StyledNo>
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default MemberDetail;
