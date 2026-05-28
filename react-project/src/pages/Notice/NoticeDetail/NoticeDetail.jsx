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

const NoticeDetail = () => {
  const { id } = useParams();
  //alert(id);
  const [notice, setNotice] = useState({
    noticeNo: "",
    noticeTitle: "",
    noticeWriter: "",
    noticeContent: "",
    createDate: "",
  });

  const [load, isLoad] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/api/notices/${id}`).then((res) => {
      console.log(res);
      const obj = res.data;
      setNotice({
        noticeNo: obj.noticeNo,
        noticeTitle: obj.noticeTitle,
        noticeWriter: obj.noticeWriter,
        noticeContent: obj.noticeContent,
        createDate: obj.createDate,
      });
      isLoad(true);
    });
  }, [id]);

  if (!load) {
    return (
      <StyledWrap>
        <StyledTitle>공지사항을 조회 중 입니다...</StyledTitle>
      </StyledWrap>
    );
  }
  return (
    <>
      <StyledWrap>
        <InnerWrap>
          <StyledTitle>번호 : {notice.noticeNo}</StyledTitle>
          <StyledWriter>제목 : {notice.noticeTitle}</StyledWriter>
          <StyledWriter>작성자 : {notice.noticeWriter}</StyledWriter>
          <StyledWriter>본문 : {notice.noticeContent}</StyledWriter>
          <StyledWriter>작성일 : {notice.createDate}</StyledWriter>
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default NoticeDetail;
