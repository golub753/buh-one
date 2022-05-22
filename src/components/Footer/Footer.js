import styles from './Footer.module.css';
import settings from '../settings/settings.module.css';
import FooterDescription from './FooterDescription/FooterDescription';
import FooterForm from './FooterForm/FooterForm';

const Footer = ({bg, title, description, number, mail}) => {
    return ( 
        <div 
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'}}
            className={styles.footer}>
            <div className={settings.container}>
                <div className={styles.footer_wrapper}>
                    <FooterDescription
                        title={title}
                        description={description}
                        number={number}
                        mail={mail}
                    />
                    <FooterForm />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;