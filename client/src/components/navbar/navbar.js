import React from "react";
// import { Link, Route } from "react-router-dom";
import styles from "./Navbar.module.css";


export function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li className={styles.dropdown}>
					<span className={styles.dropbtn}>Filter</span>
          <div className={styles.dropdown_content}>
            <span>{'European Continent'}</span>
            <span>{'American Continent'}</span>
            <span>{'Oceanic Continent'}</span>
            <span>{'African Continent'}</span>
						<span>{'Asian Continent'}</span>
					</div>
				</li>
				<li className={styles.dropdown}>
					<span className={styles.dropbtn}>
						Order
					</span>
					<div className={styles.dropdown_content}>
						<span>{'From A to Z'}</span>
						<span>{'From Z to A'}</span>
						<span>{'Ascending Population'}</span>
            <span>{'Descending Population'}</span>
					</div>
				</li>
        <li>
					<a href="/about">About</a>
				</li>
			</ul>
			<form className={styles.searchcontainer}>
				<input
					type="name"
					name="search"
					className={styles.search}
					placeholder="Search a Country..."
				></input>
			</form>
      {/* <div>
        <button>Next</button>
        <button>Prev</button>
      </div> */}
		</nav>
	);
}

export default Navbar;
/*
<ul className={styles.ul}>
        <li>
          <Link className={styles.link} to='/'>Inicio</Link>
        </li>

        <li>
          Order
          <ul className={styles.ul2}>
            <li>
              <div>By Name</div>
            </li>
            <li>
              <div>By Population</div>
            </li>
          </ul>
        </li>
        <li>
          Filter
        </li>
        
        <li>
          <Link className={styles.link} to='/about'>About</Link>
        </li>
      </ul>
*/
