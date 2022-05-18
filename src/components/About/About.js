import styles from './About.module.css';
import settings from '../settings/settings.module.css';
import AboutLeft from './AboutLeft/AboutLeft';
import AboutBlocks from './AboutBlocks/AboutBlocks';

const About = ({anchor, subtitle, title, titleBlue, cases}) => {
    return (
        <div className={styles.about} id={anchor}>
            <div className={settings.container}>
                <div className={styles.wrapper}>
                    <AboutLeft
                        title={title}
                        subtitle={subtitle}
                        titleBlue={titleBlue}
                        text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
                    />
                    <AboutBlocks
                        cases={cases}
                    />
                </div>
            </div>
        </div>
    )
}

export default About;