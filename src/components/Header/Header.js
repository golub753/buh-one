import styles from './header.module.css';
import settings from '../settings/settings.module.css';
import HeaderHome from './HeaderHome/HeaderHome';
import HeaderRight from './HeaderRight/HeaderRight';
import { useState } from 'react';

const Header = ({logo, links, menuItems}) => {

    const [isOpen, setIsOper] = useState(false);

    const openMenu = () => {
        setIsOper(!isOpen)
    }
    return(
        <div className={styles.header}>
            <div className={settings.container}>
                <div className={styles.header_wrapper}>
                    <HeaderHome 
                        logo={logo}
                        name='buhOne'
                    />
                    <HeaderRight 
                        links={links}
                        items={menuItems}
                        isOpen={isOpen}
                    />
                    <div 
                        className={styles.burger}
                        onClick={() => openMenu()}
                        >
                        <div className={styles.burger_line}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;