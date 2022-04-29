import styles from './header.module.css';
import settings from '../settings/settings.module.css';
import Home from './Home/Home';
import HeaderRight from './HeaderRight/HeaderRight';

const Header = ({logo, links, menuItems}) => {
    return(
        <div className={styles.header}>
            <div className={settings.container}>
                <div className={styles.header_wrapper}>
                    <Home 
                        logo={logo}
                        name='buhOne'
                    />
                    <HeaderRight 
                        links={links}
                        items={menuItems}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;