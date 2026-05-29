import axios from "axios";
import {
  RestaurantCard,
  RestaurantImg,
  RestaurantList,
  RestaurantMoreButton,
  RestaurantName,
  RestaurantTitle,
  RestaurantWrap,
} from "../styles/Foods.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Foods = () => {
  // 스프링 서버로 요청을 보내는 코드
  const [page, setPage] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const navi = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/api/busans?page=${page}`).then((result) => {
      //console.log(result);
      const res = result.data.getFoodKr.item;
      console.log(res);
      setFoods([...foods, ...res]);
      //setFoods([res]);
      if (res.length < 6) {
        setHasMore(false);
      }
    });
  }, [page]);

  const buttonHandler = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <RestaurantWrap>
        <RestaurantTitle>음식점 구경하기</RestaurantTitle>
        <RestaurantList>
          {foods.length === 0 ? (
            <div>
              <RestaurantCard>
                <RestaurantImg></RestaurantImg>
                <RestaurantName>로딩중</RestaurantName>
              </RestaurantCard>
            </div>
          ) : (
            foods.map((e) => (
              <div>
                <RestaurantCard
                  key={e.UC_SEQ}
                  onClick={() => navi(`/busans/${e.UC_SEQ}`)}
                >
                  <RestaurantImg src={e.MAIN_IMG_THUMB} />
                  <RestaurantName>{e.MAIN_TITLE}</RestaurantName>
                </RestaurantCard>
              </div>
            ))
          )}

          {hasMore && (
            <RestaurantMoreButton onClick={buttonHandler}>
              ▽ 더보기
            </RestaurantMoreButton>
          )}
        </RestaurantList>
      </RestaurantWrap>
    </>
  );
};

export default Foods;
