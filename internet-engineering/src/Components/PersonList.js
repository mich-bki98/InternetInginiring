import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state = {
        persons: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users')
        .then(res => {
            console.log(res);
            this.setState({persons:res.data})
        })
    }

    render(){
        return(
            <ul>
                {this.state.persons.map(person => (
                <li key={person.id}>ID: {person.id} Name: {person.name}</li>
                ))}
            </ul>
        )
    }

}