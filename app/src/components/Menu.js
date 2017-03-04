import React, {Component} from "react";
import {connect} from "react-redux";

class Menu extends Component{
	render(){
		return (
			<div id="Menu">
				<nav id="navPrinc">
					<ul>
						<li><a href="#">Accueil</a></li>
						<li><a href="#">Projets</a></li>
						<li><a href="#">Profil</a></li>
					</ul>
				</nav>
				<ul id="social">
					<li><a href="#"><img src="../public/facebook-logo.png" alt="Logo Facebook" /></a></li>
					<li><a href="#"><img src="../public/github-logo.png" alt="Logo GitHub" /></a></li>
					<li><a href="#"><img src="../public/linkedin-logo-1.png" alt="Logo LinkedIn" /></a></li>
				</ul>
			</div>
		)
	}
}

export default Menu;