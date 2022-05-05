import { useState } from 'react';
import styles from './specblock.module.css';

const SpecBlock = ({img, text}) => {
    const [bgSpec, setBgSpec] = useState({
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${img})`,
    });
    return (
        <div
            className={styles.img} 
            style={{...bgSpec}}
            onMouseOver={() => setBgSpec({
                background: `linear-gradient(0deg, rgba(0, 95, 163, 0.65), rgba(0, 95, 163, 0.65)), url(${img})`
            })}
            onMouseOut={() => setBgSpec({
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${img})`
            })}>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default SpecBlock;