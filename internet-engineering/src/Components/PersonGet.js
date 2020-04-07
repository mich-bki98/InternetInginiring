import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
    state = {
        person: {
            id: '',
            name: '',
            username: '',
        }
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }
    /**
     * operator działający po kliknięciu przycisku search,
     * przeszukuje podaną baze danych po danym id, następnie wstawia go do 
     * zmiennej person ktorej rodzicem jest state- jest to część reacta,
     * która pozwala na zmienianie stanów, np update/refresh
     */
    handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://localhost:3000/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    person: res.data
                })
                console.log(this.person);
            })
    }
    /**
     * renderuje komponent do html/tak by był otwierany przez przeglądarke
     */
    render() {                      
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    ID:
                <input type="number" name="ID" onChange={this.handleChange} />  
                </label>
                <button type="submit">Search</button>
                <ul>
                    Looked for:
                    ID: {this.state.person.id}<br />
                    Name: {this.state.person.name}<br />
                    Username: {this.state.person.username}<br />
                </ul>
            </form>
        )
    }
}