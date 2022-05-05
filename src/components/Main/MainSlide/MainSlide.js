import styles from './mainslide.module.css';

const MainSlide = ({ name, hasBtn, textBtn }) => {
    return (
        <div className={styles.slide}>
            <h2 className={styles.title}>{name}</h2>
            {(hasBtn) ? 
                <a className={styles.btn} href='/'>{textBtn}</a>
                : false
            }
        </div>
    )
};

export default MainSlide;