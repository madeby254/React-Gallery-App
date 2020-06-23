//import React
import React, {Component} from 'react';
//import React Router elements
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//import axios for fetching data
import axios from 'axios';
//import components
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Error from "./components/Error";
//flicker config
import apiKey from "./config.js";


//app class handle page components
class App extends Component {
    constructor() {
        super();
        this.state = { //state is going to be a img data we want to display, a collection of objects
            images: [],
            isLoading: true
        };
    }

    //Search Function

    search = (query = 'horse') => {
        this.setState({
            isLoading:true,
            images:[]
        });

        axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => { //when response setState
                this.setState({
                    images: response.data.photos.photo,
                    isLoading: false,
                    query: query
                });
            })
            .catch(error => { //error while fetching data
                console.log('Error fetching and parsing data', error);
            });
    };

    //take care of rendering general look of the page, switch between routes
    render() {
        // console.log(this.state.images);
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <SearchForm
                        onSearch={this.search}
                    />
                    <Nav navSearch={this.search}/>

                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/search/horses"/>} />
                        <Route path="/search/:query" render={({match}) => (
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
//export App class
export default App;
