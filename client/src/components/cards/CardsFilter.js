import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { home, next, prev } from '../../actions';

import OneCard from './card/Card.js';
import styles from './Cards.module.css';

function CardsFilter(props) {
    
    useEffect( () => {
        props.mostrarPaises()
        // eslint-disable-next-line
    },[])
    
    return(
        <div className={styles.container}>
            <div className={styles.cardscontainer}>
                {console.log('props',props)}
                {props.estadoFiltrado.map( (pais,index) => 
                    <OneCard name={pais.name} region={pais.region} flag={pais.flag} id={pais.id} key={index}/>
                )}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
       estadoOrden: state.estadoOrden,
       estadoFiltrado: state.estadoFiltro
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        mostrarPaises: () => dispatch( home() ),
        siguiente: (orden) => dispatch(next(orden)),
        anterior: (orden) => dispatch(prev(orden))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CardsFilter);