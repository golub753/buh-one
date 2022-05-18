import styles from './AboutLeft.module.css';

const AboutLeft = ({subtitle, title, titleBlue, text}) => {
    return (
        <div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.title}>
                {title}
                <div className={styles.blue}>
                    {titleBlue}
                </div>
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default AboutLeft;