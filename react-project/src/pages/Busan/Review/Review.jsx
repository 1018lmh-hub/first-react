import axios from "axios";
import { useEffect, useState } from "react";

const Review = (props) => {
  //console.log(props.id);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/api/busans/${props.id}/reviews`)
      .then((result) => {
        //console.log(result);
        //
        //오늘의 실습 :
        // 1번 OpenApi 찾기(지도 써먹을 수 있게 위도 경도 있는 거 찾으면 좋음)
        // 2번 OpenApi BootBackendServer 로 요청 보내서 응답받은 데이터 리액트 단에 뿌리기
        // 3번 나만의 테이블 만들기
        // 4번 테이블에 CR할 수 있는 API만들어서 구현하기
        //

        setReview([...result.data]);
      });
  }, [props.success]);

  return (
    <>
      {review.length != 0 ? (
        review.map((e, i) => (
          <div style={{ width: "80%", margin: "auto" }} key={i}>
            <hr />
            <h4>{e.content}</h4>
            <h5>{e.createDate}</h5>
            <h5>별점:{e.rating}</h5>
          </div>
        ))
      ) : (
        <h2>리뷰가 아직 존재하지 않습니다.</h2>
      )}
    </>
  );
};

export default Review;
