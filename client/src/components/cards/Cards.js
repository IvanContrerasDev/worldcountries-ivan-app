import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { home, next, prev } from '../../actions';

import OneCard from './card/Card.js';
import styles from './Cards.module.css';

function Cards(props) {
    
    useEffect( () => {
        props.mostrarPaises()
        // eslint-disable-next-line
    },[])
    
    return(
        <div className={styles.container}>
            <div className={styles.cardscontainer}>
                {console.log('props',props)}
                {props.estadoPaises.map( (pais,index) => 
                    <OneCard name={pais.name} region={pais.region} flag={pais.flag} id={pais.id} key={index}/>
                )}
            </div>
            <div className={styles.btnpages}>
                <button className={styles.page} onClick={() => props.anterior(props.estadoOrden) } >{'❮'}</button>
                <button className={styles.page} onClick={() => props.siguiente(props.estadoOrden) } >{'❯'}</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
       estadoPaises: state.estadoPaises,
       estadoOrden: state.estadoOrden
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        mostrarPaises: () => dispatch( home() ),
        siguiente: (orden) => dispatch(next(orden)),
        anterior: (orden) => dispatch(prev(orden))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Cards);