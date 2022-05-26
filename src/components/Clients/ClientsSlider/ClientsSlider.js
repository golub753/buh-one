import styles from './ClientsSlider.module.css';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

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

const ClientsSlider = ({clients}) => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        dotsClass: 'slick-dots clients_dots',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 561,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                }
            },
        ]
    }
    return(
        <Slider {...settings} className='clients_slider'>
            {clients.map((item, i) => {
                return(
                    <div key={i} className={styles.slide}>
                        <img src={item.img} alt={`slide № ${i}`} />
                    </div>
                )
            })}
        </Slider>
    )
}

export default ClientsSlider;