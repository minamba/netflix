import React, { Component } from 'react';
import FontAwesome from "react-fontawesome"
import "../css/Poster.css" 
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {addMovie, removeMovie} from "../actions/movie"

class PosterComponent extends Component {

    state = {
        hover : false
    }

    showOverlay = () =>{
        if(this.state.hover){
            return;
        }
        this.setState({hover: true})
    }

    hideOverlay = () => {
        this.setState({hover: false})
    }

    //supression du film dans la liste des souhaits
    remove = () => {
        //todo 
        console.log("remove");
        this.props.removeM(this.props.id)
    }

    //ajout du film dans la liste des souhaits
    add = () => {
        //todo
        console.log("add");
        this.props.addM(this.props.movie) 
    }

    render() {
        return (
            <div onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}  className="poster">
                <Link to={{pathname:`/${this.props.id}`}}>
                <img className="poster--img" src={this.props.imgSrc} alt="poster"></img>
                </Link>
                {this.state.hover? 
                (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">Liste des souhaits</h3>
                        {this.props.whished ?                        
                            (
                                <FontAwesome onClick={this.remove} className="poster--icon" name="heart" size="3x"/>
                            ): (<FontAwesome onClick={this.add} className="poster--icon__not" name="heart-o" size="3x"/>)}
                    </div>
                ) : null}                   
                    
               
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addM : movie => dispatch(addMovie(movie)),
        removeM : movieId => dispatch(removeMovie(movieId))
        
    }
}

const Poster = connect(null,mapDispatchToProps)(PosterComponent)
export {Poster};