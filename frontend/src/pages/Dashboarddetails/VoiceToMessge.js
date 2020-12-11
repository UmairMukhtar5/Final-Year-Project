import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {Button,List,ListItem,ListItemText,Divider} from '@material-ui/core';
import {KeyboardVoice,RotateLeft,Stop,SettingsBackupRestore,Send,CloudUpload} from '@material-ui/icons';
import axios from 'axios';

const Dictaphone1 = ({sendData,question,clearAllfield,sendDataqueseio}) => {
 const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
 ]
//  const andhandeler=()=>{
//    return message;

//  }


const handelsendvideClick=()=>{
  sendData(transcript);
}

const hadleEditQuestion=()=>{
  sendDataqueseio()
}


 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   });
 };


 const handeupload=async()=>{


  if (localStorage.getItem("streamname")) {
     const result= await localStorage.getItem("streamname");

     const data={
      question:question,
      answer:transcript,
      streamName:result
     }

     clearAllfield(true);
     resetTranscript();
     console.log('here is that ',data);
  
   const responsove=await axios.post('http://localhost:3000/streamings/questionAnswer/',data);
   console.log('result ',responsove.data);
  
    
    }else{
      console.log('not stream is created');
    }

     



  

 };


 return (
   <div>
     <div>
       <span
       style={{
         margin:'1rem',
         text:'bold'
       }}
       >
         listening :
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>

       
         <Button
        variant="contained"
        color="default"
        style={{
          margin:'1rem'
        }}
        onClick={resetTranscript}
        startIcon={<SettingsBackupRestore />}
      >
        Reset
      </Button>




         

         <Button
        variant="contained"
        color="secondary"
        style={{
          margin:'1rem'
        }}
        onClick={listenContinuously}
        startIcon={<KeyboardVoice />}
      >
        Answer
      </Button>





         <Button
        variant="contained"
        color="secondary"
        style={{
          margin:'1rem'
        }}
        onClick={SpeechRecognition.stopListening}
        startIcon={<Stop />}
      >
        Stop
      </Button>






      <Button
        variant="contained"
        color="secondary"
        style={{
          margin:'1rem'
        }}
        onClick={hadleEditQuestion}
      >
        New Question
      </Button>



       </div>
     </div>
     <Divider />

     <List>
 
     <ListItem text>

<ListItemText primary={transcript}  />
</ListItem>

     </List>
     <Divider />

    
   

  


    

      <Button
        variant="contained"
        
        color="primary"
        onClick={handelsendvideClick}
        startIcon={<Send />}
        style={{
          margin:'1rem'
        }}
        
      >
        {transcript ? 'Save':'Answer'}
      </Button>



      <Button
        variant="contained"
        
        color="primary"
        onClick={handeupload}
        startIcon={<CloudUpload />}
        style={{
          margin:'1rem'
        }}
        
      >
      Upload
      </Button>

     
   </div>
 );
};

export default Dictaphone1;