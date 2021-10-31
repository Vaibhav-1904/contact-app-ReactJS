import React from 'react';

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add = (event) => {
        event.preventDefault(); //  while using a button prevents page from Reloading
        if(this.state.name === "" && this.state.email === ""){

            alert("All Fields are Mandatory!");
            return
        }

        this.props.addContactHandler(this.state);
        this.setState({name : "", email : ""});
    }

    render() {
        return(
            <div className = "ui main">

                <h2> Add Contact </h2>

                <form style = {{marginTop: "25px"}} className = "ui form" onSubmit = {this.add}>
                    <div className = "field">
                        <label> Name </label>
                        <input 
                            type = "text"
                            value = {this.state.name}
                            onChange = {(event) => this.setState({name: event.target.value})} 
                            name = "name" 
                            placeholder = "Name">
                        </input>
                    </div>

                    <div className = "field">
                        <label> Email </label>
                        <input 
                            type = "email"
                            value = {this.state.email}
                            onChange = {(event) => this.setState({email: event.target.value})} 
                            name = "email" 
                            placeholder = "Email">
                        </input>
                    </div>

                    <button className = "ui button blue"> Add  </button>

                </form>
            </div>
        );
    }
}

export default AddContact;

