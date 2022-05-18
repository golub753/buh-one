import { useState } from 'react';
import styles from './AboutBlock.module.css';

const AboutBlock = ({number, text, linkText, link}) => {
    const [thisClass, setThisClass] = useState(styles.block)
    return(
        <div 
            className={thisClass}
            onMouseOver={()=> {
                setThisClass(styles.block_hover)
            }}
            onMouseOut={() => {
                setThisClass(styles.block)
            }}
            >
            <div className={styles.wrapper}>
                <div className={(thisClass === styles.block) ? styles.number : styles.number_hover}>{number}</div>
                <div className={(thisClass === styles.block) ? styles.text : styles.text_hover}>{text}</div>
                <a 
                    href={link}
                    className={(thisClass === styles.block) ? styles.link : styles.link_hover}                
                >{linkText}</a>
            </div>
        </div>
    )
}

export default AboutBlock;