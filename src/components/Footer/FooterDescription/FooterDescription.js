import styles from './FooterDescription.module.css';
import FooterLink from '../FooterLink/FooterLink';

const FooterDescription = ({title, description, number, mail}) => {
    return ( 
        <div className={styles.description_main}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.links}>
                <FooterLink
                    link={number}
                    type={'number'}
                />
                <FooterLink
                    link={mail}
                    type={'mail'}
                />
            </div>
        </div>
     );
}
 
export default FooterDescription;