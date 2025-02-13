import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Card.module.sass'

const Card = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon className={styles.card_icon} icon={icon} style={{width: '50px', height: '50px'}} />

            <h3 className={styles.card_title}>
                {title}
            </h3>

            <p className={styles.card_description}>
                {description}
            </p>
        </div>
    )
}

export default Card