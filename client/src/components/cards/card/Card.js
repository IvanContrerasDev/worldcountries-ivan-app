import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

function OneCard() {
    return(
        <Link to='/country' className={styles.cardcontainer}>
            <h1 className={styles.name}>AFGHANISTAN{/* {name} */}</h1>
            <div className={styles.abajo}>
            <h3 className={styles.region}>Asia{/* {region} */}</h3>
            <img className={styles.imgcard} src={"https://restcountries.eu/data/afg.svg"}/* {flag} */alt="country's flag"/>
            </div>
        </Link>
    )
};

export default OneCard;