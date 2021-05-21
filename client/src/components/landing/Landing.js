import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

function Landing() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<h1>Welcome to the Country App</h1>
				<h4>
					HI !! <br/>This is an application of countries where you can view all the
					countries in the world. <br/> You can search and see the details of each one,
					even see what tourist activities you can do in that country and add one,
					among other things. <br/> I hope you like it !
				</h4>
				<Link to="/home">
					<button className={styles.btn}>Go to home page</button>
				</Link>
			</div>
		</div>
	);
}


export default Landing;
