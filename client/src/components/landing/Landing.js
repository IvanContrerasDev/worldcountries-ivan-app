import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
	return (
		<div className='container_landing'>
			<h1>Welcome to the Country App</h1>
			<h4>
				HI !! <br/>This is an application of countries where you can view all the
				countries in the world. <br/> You can search and see the details of each one,
				even see what tourist activities you can do in that country and add one,
				among other things. <br/> I hope you like it !
			</h4>
			<Link to="/home">
				<button>Go to home page</button>
			</Link>
		</div>
	);
}

export default Landing;
