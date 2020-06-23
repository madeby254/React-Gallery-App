//import React
import React, {Component} from "react";

//import components
import Photo from "./Photo";
import NotFound from "./NotFound";
import Loading from "./Loading";

//Photo Container Class handling gallery

class PhotoContainer extends Component {
    //handle search for query
    componentDidMount() {
        this.props.handleSearch(this.props.routeMatch.params.query);
    }
    //compare earlier props with current props and handle search for a current one
    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if(this.props.routeMatch.params.query !== prevProps.routeMatch.params.query){
            this.props.handleSearch(this.props.routeMatch.params.query);
        }
    }

    render() {

        const results = this.props.data;
        let images;

        //if loading results show loading component
        if(this.props.loadingState){
            images = <Loading />
        }

        // when there are results append theme to a PhotoContainer
        if(results.length > 0){
            images = results.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
        }

        //if there are no results show Not found component
        if(!this.props.loadingState && results.length === 0){
            images = <NotFound />
        }


        return(
            <div className="photo-container">
                <h2>Here are your results for {this.props.routeMatch.params.query}</h2>
                <ul> {/*variable  holding photos, loading or notfound*/}
                    {images}
                </ul>
            </div>

        );
    }
}
//export PhotoContainer class
export default PhotoContainer;

