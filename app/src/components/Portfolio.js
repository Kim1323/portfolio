import React, { Component } from 'react';
import Menu from "./Menu.js";
import PageAccueil from "./PageAccueil.js";
import PageProjet from "./PageProjet.js";
import PageProfil from "./PageProfil.js"
import PiedPage from "./PiedPage.js"

export default class Portfolio extends Component {
  render() {
    return (
    	<section>
            <Menu />
            <PageAccueil />
            <PageProjet />
            <PageProfil />
            <PiedPage />
    	</section>
    );
  }
}
