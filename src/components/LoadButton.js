import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner} from "@fortawesome/free-solid-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import {Spinner} from "./Spinner"
import "../css/LoadButton.css"



class LoadButton extends Component {
    render() {
        return (
            <div>
            {this.props.Loading?
            (
                <Spinner></Spinner>
            ):
            (
               <div onClick={this.props.onButttonClick} className="loadButton">
                <h3 className="loadButton--text">VOIR PLUS</h3>
               </div> 
            )}
            </div>
        );
    }
}

export {LoadButton}