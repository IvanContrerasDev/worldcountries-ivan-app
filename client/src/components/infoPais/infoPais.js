import React, { useEffect } from "react";
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
        <div className={styles.container}>
			<div>
				<h1> Name: {name} </h1>
				<h3> Capital: {capital} </h3>
                <h4> Region: {region} </h4>
                <h4> Subregion: {subregion} </h4>
                <h4> Area: {area} </h4>
                <h4> Population: {population} </h4>
                { tourist_activities && 
                    <div>
                        <h4> Tourist Activities: </h4>
                        {tourist_activities.map( cont => {
                            return(
                                <div>
                                    <h4>name: {cont.name}</h4>
                                    <h4>season: {cont.season}</h4>
                                    <h4>duration: {cont.duration}</h4>
                                    <h4>difficulty: {cont.difficulty}</h4>
                                </div>
                            )
                        })}
                    </div>
                }
		    </div>
            <div> <img src={flag} alt={`${name} country flag`} /> </div>
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