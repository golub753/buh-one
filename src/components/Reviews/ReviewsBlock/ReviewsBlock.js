import styles from './ReviewsBlock.module.css';
import ReviewsInfo from '../ReviewsInfo/ReviewsInfo';

const ReviewsBlock = ({name, photo, job, text}) => {
    return ( 
        <div className={styles.review}>
            <div className={styles.review_wrapper}>
                <div className={styles.review_text}>
                    {text}
                </div>
                <ReviewsInfo
                    name={name}
                    photo={photo}
                    job={job}
                />
            </div>
        </div>
     );
}
 
export default ReviewsBlock;