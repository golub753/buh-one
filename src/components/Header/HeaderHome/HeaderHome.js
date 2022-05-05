import styles from './home.module.css'

const HeaderHome = (props) => {
    return (
        <a href='/' className={styles.home}>
            <img src={props.logo} alt="" />
            <span className={styles.name}>{props.name}</span>
        </a>
    )
}

export default HeaderHome;