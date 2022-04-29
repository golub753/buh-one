import styles from './headerlink.module.css';

const HeaderLink = ({text, logo, link}) => {
    return(
        <li>
            {
                link 
                ? <a className={styles.link} href={(Number(text[0])) ? `tel:${text}` : `mailto:${text}`}>
                    <img src={logo} alt=''/>
                    <span className={styles.text}>{text}</span>
                </a>
                : <div className={styles.link}>
                    <img src={logo} alt=''/>
                    <span className={styles.text}>{text}</span>
                </div>
            }
        </li>
    )
}

export default HeaderLink;