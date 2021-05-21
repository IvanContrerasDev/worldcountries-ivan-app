import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { orderAZ, prev, next, orderZA, poblacionAS, poblacionDS, buscador, filtradoContinente } from "../../actions";
import styles from "./Navbar.module.css";

export function Navbar(props) {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<a href="/home">Home</a>
				</li>
				<li className={styles.dropdown}>
					<span className={styles.dropbtn}>Filter</span>
					<div className={styles.dropdown_content}>
						<Link to='/home/filter'> <span onClick={ () => props.filtradoPorRegion('Europe') } >{"European Continent"}</span> </Link>
						<Link to='/home/filter'> <span onClick={ () => props.filtradoPorRegion('Americas') } >{"American Continent"}</span> </Link>
						<Link to='/home/filter'> <span onClick={ () => props.filtradoPorRegion('Oceania') } >{"Oceanic Continent"}</span> </Link>
						<Link to='/home/filter'> <span onClick={ () => props.filtradoPorRegion('Africa') } >{"African Continent"}</span> </Link>
						<Link to='/home/filter'> <span onClick={ () => props.filtradoPorRegion('Asia') }>{"Asian Continent"}</span> </Link>
					</div>
				</li>
				<li className={styles.dropdown}>
					<span className={styles.dropbtn}>Order</span>
					<div className={styles.dropdown_content}>
						<span onClick={ () => props.ordenarAZ() } >{"From A to Z"}</span>
						<span onClick={ () => props.ordenarZA() } >{"From Z to A"}</span>
						<span onClick={ () => props.ordenarPobAS() } >{"Ascending Population"}</span>
						<span onClick={ () => props.ordenarPobDS() } >{"Descending Population"}</span>
					</div>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
			<div className={styles.right} >
				<form className={styles.searchcontainer}>
					<input
						type="name"
						name="search"
						className={styles.search}
						placeholder='Example: "Argentina" ... '
						onChange={ (info) => { console.log(info.target.value); props.buscarPais(info.target.value)} }
					></input>
				</form>
				<div className={styles.btns}>
					<button onClick={ () => props.anterior(props.estadoOrden) } >❮ PREV</button>
					<button onClick={ () => props.siguiente(props.estadoOrden) } >NEXT ❯</button>
				</div>
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => {
    return {
       estadoPaises: state.estadoPaises,
       estadoOrden: state.estadoOrden
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		ordenarAZ: () => dispatch( orderAZ() ),
		ordenarZA: () => dispatch( orderZA() ),
		ordenarPobAS: () => dispatch( poblacionAS() ),
		ordenarPobDS: () => dispatch( poblacionDS() ),
		buscarPais: (info) => dispatch( buscador(info) ),
		filtradoPorRegion: (continente) => dispatch( filtradoContinente(continente) ),
		siguiente: (orden) => dispatch(next(orden)),
        anterior: (orden) => dispatch(prev(orden))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);