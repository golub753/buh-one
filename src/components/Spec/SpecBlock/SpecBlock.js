import { useState } from 'react';
import styles from './specblock.module.css';

const SpecBlock = ({img, text}) => {
    const [bgSpec, setBgSpec] = useState(styles.img);
    return (
        <div
            className={bgSpec} 
            style={{background: `url(${img})`}}
            onMouseOver={() => {
                setBgSpec(styles.img_hover)
            }}
            onMouseOut={() => {
                setBgSpec(styles.img)
            }}
            >
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default SpecBlock;