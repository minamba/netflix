import React, { Component } from 'react';
import {Headerimg} from "../components/Headerimg"
import {Searchbar} from "../components/Searchbar"
import {PosterList} from "../components/PosterList"
import { LoadButton } from '../components/LoadButton';
import {getMovies} from "../actions/movie"
import {connect} from "react-redux"

class HomeComponent extends Component {
    componentDidMount(){
        this.props.getMovies()
    }
    render() {
        const {mTitle, mDesc, image, movies, loading}= this.props
        return (
            <div>
                <Headerimg
                title={mTitle}
                overview={mDesc}
                imgSrc={image}
                />
                <Searchbar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies = {movies} localMovies={this.props.localMovies} />
                <LoadButton onButttonClick={this.props.onButttonClick} 
                            Loading= {loading}/>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        localMovies : state.movies.movies
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getMovies : () => dispatch(getMovies())
    }
}

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent)
export {Home};