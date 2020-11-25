import React from 'react'
import styles from "./ContentCard.module.scss";

const ContentCard = ({ title, icon, children}) => {
    return (
        <div className={styles.card}>
            <i class="material-icons icon--large">{icon}</i>
            <h3 class="heading-tertiary--sub">{title}</h3>
            <p class="body-content">{children}</p>
        </div>
    )
}

export default ContentCard;
