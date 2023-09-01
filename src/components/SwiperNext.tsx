import { useSwiper } from "swiper/react";
import { Button } from "../utils/ReusableStyles";
function SwiperNext({ customStyle }: { customStyle?: string }) {
  const swiper = useSwiper();
  return (
    <Button
      className={customStyle}
      disabled={swiper.isEnd}
      onClick={() => swiper.slideNext()}
    >
      Next
    </Button>
  );
}

export default SwiperNext;
