import { useState } from 'react';
import styles from './specblock.module.css';

const SpecBlock = ({img, text}) => {
    const [bgSpec, setBgSpec] = useState({
        background: `url(${img})`,
    });
    return (
        <div
            className={styles.img} 
            style={{...bgSpec}}>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default SpecBlock;