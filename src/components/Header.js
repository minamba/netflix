import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import "../css/Header.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { getNumber } from "../actions/movie"

class HeaderComponent extends Component {
componentDidMount(){
    this.props.getNumber() // ça appel la methode get number qui est dans mapDispatchToProps
}

    render() {
        return (
            <div className="header">
                <Link to={{pathname:"/"}}>
                <FontAwesome className="header-movie" name="film" size="5x" />
                </Link>
                <h3>NETFLIX</h3>
                <FontAwesome className="header--heart" name="heart" size="5x" />
                <div className="header--badge">{this.props.badge}</div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        badge : state.movies.number
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getNumber : () => dispatch(getNumber())
    }
}
const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderComponent)

export {Header}; //ceci est un export nommé 