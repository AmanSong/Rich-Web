import {React} from 'react';
import './Music.css'

const AudioPlayer = () => {

    return (
        <div className="audio-container">
            <audio className="audio-player" controls loop={true}>
                <source src="lofiFruits.mp3" type="audio/mp3" />
            </audio>
        </div>
    );
};

export default AudioPlayer;

