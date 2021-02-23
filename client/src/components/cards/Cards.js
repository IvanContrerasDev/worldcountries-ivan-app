import React from 'react';
import OneCard from './card/Card.js';
import styles from './Cards.module.css';

function Cards() {
    return(
        <div className={styles.container}>
            <div className={styles.cardscontainer}>
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
                <OneCard /> 
            </div>
            <div className={styles.btnpages}>
                <button className={styles.page}>{'❮'}</button>
                <button className={styles.page}>{'❯'}</button>
            </div>
        </div>
    )
};

export default Cards;
