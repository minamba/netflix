import React, { Component } from 'react';
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"

class VideoPlayer extends Component {
    handleEnded = () =>{
        console.log("video ended")
    }


    render() {
        const videoUrl ="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        const imageSrc ="./images/Fast_large.jpg"
        return (
            <div className="videoPlayer">
                <ReactPlayer 
                url={videoUrl}
                controls
                playing={false}
                width="100%"
                height="100%"
                style={{position :"ablosute", top:"0", left:"0"}}
                light={this.props.imageUrl}
                onEnded={this.handleEnded}
                
                />
            </div>
        );
    }
}

export {VideoPlayer};