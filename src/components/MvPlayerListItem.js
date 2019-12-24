import React, { Component } from 'react';
import "../css/MvPlayerListItem.css"

class MvPlayerListItem extends Component {
    render() {
        const {number, title, duration} = this.props
        const activeCLass = this.props.active ? "mvPlayerListItem active" : "mvPlayerListItem"
        return (
            <>
            <div className={activeCLass}>
                <div className="mvPlayerListItem-number">{number}</div>
                <div className ="mvPlayerListItem--title">{title}</div>
                <div className="mvPlayerListItem---time">{duration}</div>
            </div>
            <div className="mvPlayerListItem--divider" />
            </>
        );
    }
}

export {MvPlayerListItem};