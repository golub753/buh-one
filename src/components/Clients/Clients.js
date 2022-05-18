import styles from './Clients.module.css';
import settings from '../settings/settings.module.css';
import ClientsSlider from './ClientsSlider/ClientsSlider';

const Clients = ({anchor, title, subtitle, clients}) => {
    return (
        <div id={anchor} className={styles.clients}>
            <div className={settings.container}>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.title}>{title}</div>
                <ClientsSlider
                    clients={clients}
                />
            </div>
        </div>
    )
}

export default Clients;