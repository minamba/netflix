import React, { Component } from 'react';
import {Container} from "./Container"
import {Stars} from "./Stars"
import "../css/HeaderDetails.css"
import {IMAGE_BASE_URL,POSTER_SIZE}  from "../config"
import {calcTime, convertMoney} from "../utils/helpers"


class HeaderDetails extends Component {


        calclVote =() => {
        this.fakeArray1 = []
        this.fakeArray2 = []
        const vote = Math.round(this.props.vote/2)
        const rest = 5- vote

        for( let i=0; i<vote; i++){
             this.fakeArray1.push("1");
        }
        if(rest !==0){
            for( let i=0; i<rest; i++){
                 this.fakeArray2.push("1")
            }
        }
    }


    render() 
    {
        this.calclVote()
        const imgSrc =`${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.props.imgSrc}`
        return(           
                <div className="headerDetails">
                        <div className="badge-decoration">{this.props.status}</div>
                        <div className="headerDetails--poster">
                            <img className="headerDetails--poster__img" src={imgSrc} alt="lol" />
                        </div>
                
                        <div className="headerDetails--container">
                            <h3 className="headerDetails--container__title">{this.props.mTitle}</h3>
                            <p className="headerDetails--container__desc">{this.props.mDesc}</p>
                            <div className="headerDetails--info">
                                <Container iconName="clock" content={calcTime(this.props.runtime)} />
                                <Stars fakeArray1={this.fakeArray1} fakeArray2={this.fakeArray2}/>
                                <Container iconName="money" content={convertMoney(this.props.revenue)} />
                            </div>
                        </div>
                </div>
        )
    }
}

export  {HeaderDetails};