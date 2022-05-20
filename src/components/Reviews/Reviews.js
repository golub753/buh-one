import styles from './Reviews.module.css';
import settings from '../settings/settings.module.css';
import ReviewsBlocks from './ReviewsBlocks/ReviewsBlocks';

const Reviews = ({anchor, title, subtitle, reviews}) => {
    return ( 
        <div id={anchor} className={styles.reviews}>
            <div className={settings.container}>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.title}>{title}</div>
                <ReviewsBlocks
                    items={reviews}
                />
            </div>
        </div>
     );
}
 
export default Reviews;