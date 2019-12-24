import React, { Component } from 'react';
import {HeaderDetails, ActorList, Spinner} from "../components"
import Axios from 'axios';
import {API_URL,API_KEY} from "../config"

class Details extends Component {
    state = {
        loading:true,
        actors:  [
            {
                name:"Minamba Camara",
        
            },
            {
                name:"Arnaud Alcindor",
        
            },
            {
                name:"Kaba Diallo",
        
            },
            {
                name:"Babatunde Abraham",
        
            }
        ],
        mTitle:"Batman",
        mDesc:"",
        imgSrc:"",
        revenue:"",
        runtime:"",
        vote:"" 
    }

    async componentDidMount(){
        try{
            const movieId = this.props.match.params.id;
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`
            const {data : {revenue,runtime,title,overview,status,vote_average,poster_path}} = await this.loadInfos(url)
            console.log("dataFilm", overview)
            await this.loadInfos(url)
            this.setState({revenue,runtime,mTitle:title,mDesc:overview,status,imgSrc:poster_path, vote:vote_average}, async() => 
            {
                const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`
                const {data : {cast}} = await this.loadInfos(url)
                console.log("data", cast)
                this.setState({actors:[...cast], loading:false})
            }) 
        }
        catch(e){
            console.log("e",e)
        }
    }

    loadInfos = url => Axios.get(url)
    

    render() {
        const {loading,mTitle,mDesc,actors,imgSrc,revenue,runtime,status,vote} = this.state
        return (
            <div className="app">
                {this.props.loading?
                (
                    <Spinner/>
                ) : 
                (
                    <>
                    <HeaderDetails
                        mTitle={mTitle}
                        mDesc={mDesc}
                        imgSrc={imgSrc}
                        runtime={runtime}
                        revenue={revenue}
                        status={status}
                        vote={vote}
                    />
                    <ActorList actors={actors} />
                    </>
                )
            
                }
                je suis le composent details
            </div>
        );
    }
}

export {Details};