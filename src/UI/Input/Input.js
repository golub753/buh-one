import styles from './input.module.css';

const Input = ({type, placeholder, id}) => {
    return ( 
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{placeholder}</label>
            <input 
                required
                placeholder={placeholder}
                type={type}
                id={id}
                className={styles.input}
                autoComplete='off'
            />
        </div>
     );
}
 
export default Input;