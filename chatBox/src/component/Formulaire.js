import React from 'react';
import PropTypes from 'prop-types';
// CSS

class Formulaire extends React.Component {

	state = {
		length:this.props.length
	}

	createMessage = (e)=> {
		e.preventDefault();
		const message = {
			message:this.message.value,
			pseudo: this.props.pseudo
		}
		this.props.addMessage(message);
		// Reset
		this.messageForm.reset();
		const length = this.props.length;
		this.setState({length})
	}

	compteur = (e)=>{
		const length = this.props.length-this.message.value.length;
		this.setState({length})
	
	}
	render() {
		return (
			<form 
			className="form"
			onSubmit={(e)=> this.createMessage(e)}
			ref={input => this.messageForm = input}
			>
				<textarea 
				cols="30" 
				rows="10" 
				maxLength={this.props.length}
				required
				ref={input => this.message = input}
				onChange={(e)=>this.compteur(e)}

				>
				</textarea>
				<div className="info">{this.state.length}</div>
				<button type='submit'>Envoyer</button>
			</form>
		)
	}

}
Formulaire.propTypes = {
	addMessage: PropTypes.func.isRequired
	}



export default Formulaire;