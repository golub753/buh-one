import styles from './ReviewsBlocks.module.css';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';

const SampleNextArrow = (props) => {
    return (<div className={`${props.className} ${styles.btn_next}`} onClick={props.onClick}>
        <img 
        className={styles.next}
        src="./images/svg/arrow_slider.svg"
        alt=''
    />
    </div>)
};

const SamplePrevArrow = (props) => {
    return(<div className={`${props.className} ${styles.btn_prev}`} onClick={props.onClick}>
        <img 
        className={styles.prev}
        src="./images/svg/arrow_slider.svg"
        alt=''
    />
    </div>)
}

const ReviewsBlocks = ({items}) => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        dotsClass: 'slick-dots reviews_dots',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            }
        ]
    }
    return ( 
        <Slider {...settings}>
            {items.map((item, id) => <ReviewsBlock 
                                            key={id} 
                                            name={item.name} 
                                            photo={item.photo} 
                                            job={item.job} 
                                            text={item.text}/>)}
        </Slider>
     );
}
 
export default ReviewsBlocks;