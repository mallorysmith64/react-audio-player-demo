import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import Love from './I_Love_Destruction_When_It_Serves_Love.mp3'

const Player = () => (
  <section className="audio-player">
    <AudioPlayer
      autoPlay
      src={Love}
      onPlay={e => console.log("onPlay")}
    />
  </section>
  );


export default Player
