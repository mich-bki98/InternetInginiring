import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state = {
        persons: []
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.kisim.eu.org/users`)
        .then(res => {
            console.log(res);
            this.setState({persons:res.data})
        })
    }

    render(){
        return(
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }

}