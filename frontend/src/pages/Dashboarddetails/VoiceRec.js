import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VoiceRec = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const { startListening, stopListening } = SpeechRecognition;


    return (
        <div>
            <button onClick={startListening}>Start</button>
            <button onClick={stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    )
}
export default VoiceRec