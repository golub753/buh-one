import styles from './headermenu.module.css';
import HeaderItem from '../HeaderItem/HeaderItem';

const HeaderMenu = ({items}) => {
    return(
        <nav>
            <ul className={styles.ul}>
                {items.map((item, id) => {
                    return <HeaderItem 
                        key={id}
                        name={item.name}
                        link={item.link}
                    />
                })}
            </ul>
        </nav>
    )
}

export default HeaderMenu;