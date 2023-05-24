import React, { useState } from 'react';
import axios from 'axios';
import './Intro.css';
import logo from '../logo.svg';
import pong from '../img/pong.png';
import github from '../img/github.png';
import fourtytwo from '../img/ft.png';

const Login = () => {
	const [showInputs, setShowInputs] = useState(false);
	const [showExistingError, setShowExistingError] = useState(false);
	const [showSuccessAdded, setShowSuccessAdded] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [re-password, setRePassword] = useState('');
	const [response, setResponse] = useState('');

	const handleSignupText= () => {
		setShowInputs(true);
	};

	const handleInput= () => {
		setShowSuccessAdded(false);
		setShowExistingError(false);
	};

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		console.log('Email value is:', event.target.value);
	};
	
	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		console.log('Password value is:', event.target.value);
	};

	const handleSignupButton = async ()  => {
		console.log('Email:', email);
		console.log('Password:', password);
		try {
			const data = { is_online: 'true', password: password, user_name: email };
			const options = {
				headers: {
				'Content-Type': 'application/json'
				}
			};
			const response = await axios.post('http://localhost:3001/users/', data, options);
			setResponse(response.data);
			setShowSuccessAdded(true);
		} catch (error) {
			console.error('POST request error:', error);
				setShowExistingError(true);
		}
		setEmail('');
		setPassword('');
	};

	return (
	<div className="App">
		<header className="App-header">
			<img src={pong} className="App-logo" alt="logo" />
			<br/>

			<button className='Login-button'><text className='icon-text'>Login with</text>
			<img src={fourtytwo} alt="Ft-icon" className='icon'/></button>
			<br/>

			<button className='Login-button'><text className='icon-text'>Login with Github</text>
			<img src={github} alt="git-icon" className='icon'/></button>
			<br/>

			<button className='Login-button' id='Email-Login'>Login with E-mail</button>
			<br/>

        	<p className='Signup' onClick={handleSignupText}>Sign Up with E-mail</p>

			{showInputs && (
			<div className='Sign-input'>
				<input className='Signup-input' id="email" type="email" placeholder="* Email" value={email} onChange={handleChangeEmail} onInput={handleInput}/>
				<input className='Signup-input' id="password" type="password" placeholder="* Password" value={password} onChange={handleChangePassword}/>
				{/* <input className='Signup-input' id="re-password" type="password" placeholder="Repeat Password" onChange={handleChangeRePassword}/> */}
				<button className='Signup-button' onClick={handleSignupButton}>Sign Up</button>
			</div>
     		)}
			
			{showSuccessAdded && (
			<div className='Sign-error'>
				<p className='message'>*User successfully added!</p>
			</div>
      		)}

			{showExistingError && (
			<div className='Sign-success'>
				<p className='message'>*Looks like this user already exists!</p>
			</div>
      		)}
		</header>
	</div>
	)
};

export default Login;