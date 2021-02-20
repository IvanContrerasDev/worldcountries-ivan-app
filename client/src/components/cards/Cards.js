import React from 'react';
import {Link} from 'react-router-dom';
import OneCard from './card/Card.js';
import './Cards.css';

function Cards() {
    return(
        <div>
            <OneCard /> 
            <button>Anterior</button>
            <button>Siguiente</button>
        </div>
    )
};

export default Cards;
