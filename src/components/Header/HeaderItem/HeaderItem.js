import styles from './headeritem.module.css'

function behaviorLink(event) {
    event.preventDefault();
    const id = event.target.closest('a').getAttribute('href');

    if(id[0] === '#') {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

const HeaderItem = ({name, link}) => {
    return(
        <li>
            <a className={styles.link}
                href={link}
                onClick={(e) => {behaviorLink(e)}}>
                <span>{name}</span>
            </a>
        </li>
    )
}

export default HeaderItem;