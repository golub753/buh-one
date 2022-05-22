import styles from './FooterForm.module.css';
import Input from '../../../UI/Input/Input';
import Textarea from '../../../UI/Textarea/Textarea';

const FooterForm = () => {
    return ( 
        <form className={styles.form}>
            <div className={styles.inputs}>
                <Input
                    type='text'
                    placeholder='Имя'
                    id='name'
                />
                <Input
                    type='text'
                    placeholder='Фамилия'
                    id='surname'
                />
            </div>
                <Textarea
                    placeholder='Ваше сообщение'
                    label='Сообщение'
                    id='message'
                />
            <input 
                type='submit'
                className={styles.submit}
                value='Отправить сообщение'
            />
        </form>
     );
}
 
export default FooterForm;