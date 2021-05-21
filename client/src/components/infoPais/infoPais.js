import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getData } from "../../actions";
import styles from "./infoPais.module.css";

function InfoPais(props) {
    const {name,capital,region,subregion,area,population,flag,tourist_activities} = props.estadoPais;
    const {idPais} = props.match.params;
    useEffect(() => {
        console.log('props.match.params.idPais :', props.match.params.idPais);
        props.obtenerDatos(idPais);
        // eslint-disable-next-line
    },[])
	return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1> {name && name.toUpperCase()} </h1>
                <div className={styles.box0}>
                    <div className={styles.box1}>
                        <h2> CAPITAL: {capital} </h2>
                        <h3> REGION: {region} </h3>
                        <h3> SUBREGION: {subregion} </h3>
                        <h3> AREA:  { new Intl.NumberFormat("de-DE").format(area)} km² </h3>
                        <h3> POPULATION:  {new Intl.NumberFormat("de-DE").format(population)} </h3>
                    </div>
                    <img className={styles.imagen} src={flag} alt={`${name} country flag`} />
                </div>            
                { tourist_activities && 
                    <div className={styles.box2}>
                        <h2> TOURIST ACTIVITIES </h2>
                        {tourist_activities.map( cont => {
                            return(
                                <div className={styles.box3}>
                                    <div>
                                        <h3>Name: {cont.name}</h3>
                                        <h3>Season: {cont.season}</h3>
                                    </div>
                                    <div>
                                        <h3>Duration: {cont.duration}</h3>
                                        <h3>Difficulty: {cont.difficulty}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                <Link to={`/home/country/${idPais}/addActivity`}><button className={styles.btn}>Add Tourist Activity</button></Link>
            </div>
        </div>
	);
}

const mapStateToProps = (state) => {
    return {
        estadoPais: state.estadoPaises
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        obtenerDatos: (pais) => dispatch( getData(pais) )
        //anterior: (orden) => dispatch(prev(orden))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoPais);