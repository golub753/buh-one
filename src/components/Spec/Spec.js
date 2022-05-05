import styles from './spec.module.css';
import settings from '../settings/settings.module.css';
import SpecBlocks from './SpecBlocks/SpecBlocks';

const Spec = ({specs, subtitle, title, anchor}) => {
    return (
        <div
            className={styles.spec} 
            id={anchor}
        >
            <div className={settings.container}>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.title}>{title}</div>
                <SpecBlocks items={specs}/>
            </div>
        </div>
    )
};

export default Spec;