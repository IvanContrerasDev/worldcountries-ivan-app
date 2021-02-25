import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

function OneCard({name,region,flag,id}) {
    return(
        <Link to={`/home/country/${id}`} className={styles.cardcontainer}>
            <h1 className={styles.name}> { name } </h1>
            <div className={styles.abajo}>
            <h3 className={styles.region}> { region } </h3>
            <img className={styles.imgcard} src={ flag } alt="country's flag"/>
            </div>
        </Link>
    )
};

export default OneCard;