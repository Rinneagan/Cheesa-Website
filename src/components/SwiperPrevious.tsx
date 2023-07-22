import { useSwiper } from "swiper/react";
import { Button } from "../utils/ReusableStyles";

function SwiperPrevious() {
  const swiper = useSwiper();
  return (
    <Button disabled={swiper.isBeginning} onClick={() => swiper.slidePrev()}>
      Previous
    </Button>
  );
}

export default SwiperPrevious;
