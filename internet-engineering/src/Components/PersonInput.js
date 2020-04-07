import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
    state = {
        name: '',
        username: '',
    }

    handleChange = event =>{
        this.setState({name: event.target.value});
    };
    handleUsername = event=>{
        this.setState({username: event.target.value});
    };

    handleSubmit = event =>{
        event.preventDefault();

        const object = {
            name: this.state.name,
            username: this.state.username,
        }

        axios.post('http://localhost:3000/users', object)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                    <br/>
                    Username:
                    <input type="text" name="username" onChange={this.handleUsername}/>
                </label>
                <br/>
                <button type="submit">Add</button>
            </form>
        )
    }

}