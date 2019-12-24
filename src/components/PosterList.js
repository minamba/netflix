import React, { Component } from 'react';
import {Poster} from "./Poster"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config"
import "../css/PosterList.css"

let wish;

class PosterList extends Component {

 renderPoster = () => {
        return this.props.movies.map(movie =>{
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`
            wish=false
            if(this.props.localMovies){
                console.log("local movie", movie)
                this.props.localMovies.forEach(localMovie => {
                    console.log("local movie", localMovie)
                    if(movie.id === localMovie.id){
                        wish = true
                    }
                });
            }
            else{
                console.log("ya rien")
            }
            return (
                <Poster
                    key={movie.id}
                    imgSrc = {imgSrc}
                    whished={wish}
                    movie={movie}
                    mTitle={movie.overview}
                    id= {movie.id}
                    />
            )
        })
}

    render() {
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILMS</h3>
                <div className ="posterList--grid">{this.renderPoster()}</div>
            </div>
        );
    }
}

export {PosterList};