import styles from './textarea.module.css';

const Textarea = ({label, placeholder, id}) => {
    return ( 
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <textarea 
                id={id}
                placeholder={placeholder}
                required
                autoComplete='off'
                className={styles.textarea}></textarea>
        </div>
     );
}
 
export default Textarea;