import styles from './headerlinks.module.css'
import HeaderLink from '../HeaderLink/HeaderLink'

const HeaderLinks = ({links}) => {
    return(
            <ul className={styles.ul}>
                {links.map((link, id) => {
                    return <HeaderLink 
                        key={id}
                        logo={link.logo}
                        link={link.link}
                        text={link.text}
                    />
                })}
            </ul>
    )
}

export default HeaderLinks;