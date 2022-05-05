import styles from './mainslider.module.css';
import MainSlide from '../MainSlide/MainSlide';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
    return (<div className={styles.btn_next} onClick={props.onClick}>
        <img 
        className={styles.next}
        src="./images/svg/arrow_slider.svg"
        alt=''
    />
    </div>)
};

const SamplePrevArrow = (props) => {
    return(<div className={styles.btn_prev} onClick={props.onClick}>
        <img 
        className={styles.prev}
        src="./images/svg/arrow_slider.svg"
        alt=''
    />
    </div>)
}
const MainSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <Slider {...settings}>
            {slides.map((slide, i) => <MainSlide key={i} name={slide.text} hasBtn={slide.hasBtn} textBtn={slide.textBtn}/>)}
        </Slider>
    )
};

export default MainSlider;