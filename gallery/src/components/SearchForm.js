import React, { Component } from "react";
import { withRouter } from 'react-router-dom';


class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearchState = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        let query = this.query.value;
        this.props.history.push(`/search/${query}`);
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                    onChange={this.onSearchState}
                    name="search"
                    ref={(input) => this.query = input}
                    placeholder="Search"
                    required />
                <button type="submit" className="search-button">
                    <img alt="Search icon" src="https://img.icons8.com/nolan/64/google-web-search.png" />
                </button>
            </form>
        );
    }
}

export default withRouter(SearchForm);