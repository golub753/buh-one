import styles from './ReviewsInfo.module.css';

const ReviewsInfo = ({name, photo, job}) => {
    return ( 
        <div className={styles.info}>
            <div className={styles.img}>
                <img src={photo} alt='Клиент'/>
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{name}</div>
                <div className={styles.job}>{job}</div>
            </div>
        </div>
     );
}
 
export default ReviewsInfo;