import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Error from "./components/Error";
import apiKey from "./components/config";



class App extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            isLoading: true
        };
    }



    search = (query = 'wildebeest') => {
        this.setState({
            isLoading: true,
            images: []
        });

        axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    images: response.data.photos.photo,
                    isLoading: false,
                    query: query
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };


    render() {

        return (
            <Router>
                <div className="container">
                    <Header />
                    <SearchForm
                        onSearch={this.search}
                    />
                    <Nav navSearch={this.search} />

                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/search/wildebeest" />} />
                        <Route path="/search/:query" render={({ match }) => (
                            <PhotoContainer
                                routeMatch={match}
                                data={this.state.images}
                                queryData={this.state.query}
                                handleSearch={this.search}
                                loadingState={this.state.isLoading}
                            />
                        )} />
                        <Route path="*" component={Error} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
