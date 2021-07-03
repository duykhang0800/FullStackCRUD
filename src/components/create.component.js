import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            company: '',
            age: ''
        }
        this.handleChange.bind(this)
    }

    handleChange(event) {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }

    onSubmit(event) {
        event.preventDefault()

        const obj = {
            name: this.state.name,
            company: this.state.company,
            age: this.state.age
        }
        axios.post('http://localhost:4000/persons/add', obj)
            .then(res => console.log(res.data, obj))

        this.setState({
            name: '',
            company: '',
            age: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Add Company Name: </label>
                        <input type="text" className="form-control" name='company' value={this.state.company} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Add Age: </label>
                        <input type="text" className="form-control" name='age' value={this.state.age} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <button type='submit' value='Register Person' className="btn btn-primary" style={{ marginTop: '20px', marginLeft: "10px" }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}