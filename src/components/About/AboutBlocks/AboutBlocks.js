import AboutBlock from '../AboutBlock/AboutBlock';
import styles from './AboutBlocks.module.css';

const AboutBlocks = ({cases}) => {
    return(
        <div className={styles.blocks}>
            {cases.map((item, i) => {
                return (
                    <AboutBlock
                        number={item.number}
                        text={item.text}
                        linkText={item.linkText}
                        link={item.link}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default AboutBlocks;