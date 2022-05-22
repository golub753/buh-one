import styles from './FooterLink.module.css';

const FooterLink = ({link, type}) => {
    return (
        (type === 'number') 
        ? <a href={`tel:${link}`} className={styles.link}>
            <img src='/images/svg/footer-phone.svg' alt='icon'/>
            {link}
            </a> 
        : <a href={`mailto:${link}`} className={styles.link}>
            <img src='/images/svg/footer-mail.svg' alt='icon'/>
            {link}
            </a>
    )
}
 
export default FooterLink;