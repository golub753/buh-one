import { Parallax } from "react-parallax";
import styles from './main.module.css';
import settings from '../settings/settings.module.css';
import MainSlider from "./MainSlider/MainSlider";

const slides = [
    {
      text: 'Бухгалтерские услуги в Санкт-Петербурге',
      hasBtn: true,
      textBtn: 'Наша презентация',
    },
    {
      text: 'Бухгалтерские услуги в Санкт-Петербурге',
      hasBtn: true,
      textBtn: 'Наша презентация',
    },
    {
      text: 'Бухгалтерские услуги в Санкт-Петербурге',
      hasBtn: true,
      textBtn: 'Наша презентация',
    },
]

const Main = () => {
    return (
        <Parallax 
            bgImage="./images/image/main-screen.jpg"
            className={styles.main}
            blur={{ min: -15, max: 15 }}>
            <div className={settings.container}>
                <MainSlider 
                    slides={slides} />
            </div>
        </Parallax>
    )
}

export default Main;