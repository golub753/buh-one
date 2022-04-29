import styles from './headerright.module.css';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const HeaderRight = ({links, items}) => {
    return(
        <div className={styles.header_links}>
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