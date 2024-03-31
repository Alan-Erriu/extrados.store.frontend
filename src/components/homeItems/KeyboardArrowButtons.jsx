import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "../../styles/index.css";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <KeyboardArrowLeft className="slick-prev slick-arrow" />
  </button>
);
export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <KeyboardArrowRight className="slick-next slick-arrow" />
  </button>
);

export const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};
