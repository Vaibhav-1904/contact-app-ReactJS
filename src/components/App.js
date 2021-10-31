import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.js'
import ContactList from './ContactList.js'
import AddContact from './AddContact.js'


function App() {

	const LOCAL_KEY_STORAGE = "contacts";
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		console.log(contact);
		setContacts([...contacts, contact]);
	};

	useEffect(() => {
		const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_KEY_STORAGE));
		if(retrieveContacts) setContacts(retrieveContacts);
	}, []); 

	useEffect(() => {
		localStorage.setItem(LOCAL_KEY_STORAGE, JSON.stringify(contacts));
	}, [contacts]); 

	return (
		<div className = "ui container">
			<Header/>
			<AddContact addContactHandler = {addContactHandler} />
			<ContactList contacts = {contacts} />
        </div>
	);
}

export default App;


// A Component represents a part of a User Interface. A componenet is a piece of reusable code that can be used 
// unlimited amount of times. It has it's own functionality.

// jsx -> combination of javaScript and Html

// App.js is the main Componenet

// You can use component elements as Custom HTML elements

// useState is react hooks used with functional components

// React Hooks -> https://reactjs.org/docs/hooks-state.html

