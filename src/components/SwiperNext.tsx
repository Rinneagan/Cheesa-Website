import { useSwiper } from "swiper/react";
import { Button } from "../utils/ReusableStyles";
function SwiperNext() {
  const swiper = useSwiper();
  return (
    <Button disabled={swiper.isEnd} onClick={() => swiper.slideNext()}>
      Next
    </Button>
  );
}

export default SwiperNext;
