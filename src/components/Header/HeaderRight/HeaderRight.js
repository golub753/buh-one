import styles from './headerright.module.css';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const HeaderRight = ({links, items, isOpen}) => {
    return(
        <div className={`${styles.header_links} ${isOpen ? styles.active : false}`}>
            <HeaderLinks 
                links={links} 
            />
            <HeaderMenu 
                items={items}
            />
        </div>
    )
}

export default HeaderRight;