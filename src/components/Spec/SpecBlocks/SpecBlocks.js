import styles from './specblocks.module.css';
import SpecBlock from '../SpecBlock/SpecBlock';

const SpecBlocks = ({items}) => {
    return(
        <div className={styles.spec_grid}>
            {items.map((item, i) => {
                return (
                    <SpecBlock 
                        key={i}
                        img={item.img}
                        text={item.text}
                    />
                )
            })}
        </div>
    )
}

export default SpecBlocks;