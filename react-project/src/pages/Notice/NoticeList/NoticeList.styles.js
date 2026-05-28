/*
    NO, TITLE, WRITER
*/
import styled from "styled-components";

export const StyledWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 800px;
  height: auto;
  background-color: #0f650f;
`;

export const StyledTitle = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 600;
  text-align: center;
  margin: 65px 0px;
  letter-spacing: 6px;
`;

export const InnerWrap = styled.div`
  width: 70%;
  margin: auto;
  border-radius: 15px;
  min-height: 500px;
  height: auto;
  background-color: #efede2;
  border: 10px dotted red;
  padding: 30px;
`;

export const StyledCard = styled.div`
  width: 230px;
  height: 230px;
  margin: 10px 10px;
  padding: 10px;
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  display: inline-block;
  vertical-align: top;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const StyledNo = styled.h4`
  font-size: 11px;
  font-weight: 600;
  color: crimson;
  margin: 20px;
  letter-spacing: 8px;
`;

export const StyledNoticeTitle = styled.h2`
  font-size: 24px;
  font-wight: 800;
  color: green;
  margin: 20px;
`;

export const StyledWriter = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: brown;
`;
