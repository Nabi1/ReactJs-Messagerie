import React from 'react';
import PropTypes from 'prop-types';
// CSS

class Connexion extends React.Component {

/* 
================================
========== FONCTIONS ===========
================================
*/
	goToChat = event => {
		event.preventDefault();
		// Récupération du pseudo
		const pseudo =this.pseudoInput.value
		
		//Changer l'url
		// this.context.router.transitiionTo(`/pseudo/${pseudo}`)
		this.props.history.push(`/pseudo/${pseudo}`);
	};

/* 
================================
========== RENDER ==============
================================
*/
	render() {
		return (
			<div className="connexionBox" onSubmit={(e) =>
				this.goToChat(e)} >
				<form action="" className="connexion">
					<input 
						type="text" 
						placeholder='pseudo' 
						required 
						ref={(input) => this.pseudoInput = input} 
					/>
					<button type='submit'>Go</button>
				</form>
			</div>
		)
	}
	// Root.contextTypes = {
	// 	router: React.PropTypes.object
	// }
}


/* 
================================
========== PROPTYPES ===========
================================
*/

// Connexion.contextTypes = {
// 	router: React.PropTypes.object.isRequired
// }
Connexion.propTypes = {
	history: PropTypes.object.isRequired
}

export default Connexion;