import styles from './headeritem.module.css'

const HeaderItem = ({name, link}) => {
    return(
        <li>
            <a className={styles.link}
                href={link}>
                <span>{name}</span>
            </a>
        </li>
    )
}

export default HeaderItem;