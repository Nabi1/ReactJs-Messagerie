// React
import React from 'react';
import Formulaire from './Formulaire.js';
import Message from './Message.js';
import base from '../base';
import PropTypes from 'prop-types';
// CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import '../animation.css';

class App extends React.Component {

/* 
=================================
========== STATE ================
=================================
*/
	state = {
		messages : {}
	}

/* 
================================
========== FONCTIONS ===========
================================
*/
	componentWillMount() {
		this.ref = base.syncState('/', {
			context:this,
			state: 'messages'
		});
	}

	componentDidUpdate() {
		// Scroll vers le bas
		this.messages.scrollTop=this.messages.scrollHeight;
	}

	addMessage = (message) => {
		// Copier le state
		const messages = {...this.state.messages};
		// Ajouter le message avec un key timestamp
		const timeStamp = Date.now();
		messages[`message - ${timeStamp}`] = message;
		// On supprime s'il y a plus de 10 message
		Object.keys(messages).slice(0, -10).map(key => messages[key]=null);
		// Mettre à jour le state
		this.setState({messages});
	}

	isUser = (pseudo) =>{
		return pseudo === this.props.match.params.pseudo;

	};

/* 
================================
========== RENDER ==============
================================
*/
	render() {

		const messages = Object
		.keys(this.state.messages)
		.map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />);

		return (
			<div className="box">
				<div className="messages" ref={input=>this.messages = input}>
					<ReactCSSTransitionGroup
					component='div'
					className="message"
					transitionName='message'
					transitionentertimeout={200}
					transitionleavetimeout={200}
					transitionAppear={true}
					>
						{/* <Message pseudo={this.props.match.params.pseudo} /> */}
						{messages}
					</ReactCSSTransitionGroup>
				</div>
				<Formulaire 
				addMessage={this.addMessage} 
				pseudo={this.props.match.params.pseudo}
				length={140}
				/>
			</div>
		)
	}
}

/* 
================================
========== PROPTYPES ===========
================================
*/
App.propTypes = {
	match: PropTypes.object.isRequired,

	}

export default App;
