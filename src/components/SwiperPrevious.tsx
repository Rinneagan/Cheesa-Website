import { useSwiper } from "swiper/react";
import { Button } from "../utils/ReusableStyles";

function SwiperPrevious({ customStyle }: { customStyle?: string }) {
  const swiper = useSwiper();
  return (
    <Button
      className={customStyle}
      disabled={swiper.isBeginning}
      onClick={() => swiper.slidePrev()}
    >
      Previous
    </Button>
  );
}

export default SwiperPrevious;
