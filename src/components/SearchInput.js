import React, { Component } from 'react'

export default class SearchInput extends Component {

    state = {
        filterInput: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.changeFilter(this.state.filterInput)

        this.setState({
            filterInput: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="field">
            <div className="control">
                <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder="Input" onChange={this.handleChange} value={this.state.filterInput} name="filterInput"/>
                <button>Search</button>
                </form>
            </div>
            </div>
        )
    }
}
