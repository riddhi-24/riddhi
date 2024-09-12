import React from 'react';
import './App.css';
import MicRecorder from 'mic-recorder-to-mp3';

const main={
  marginBottom:'20px'
}
const record = {
  position:'relative',
  right:'60px',
  borderRadius:'50px'
}
const stop={
  position:'relative',
  left:'60px',
  borderRadius:'50px'
}

const Mp3Recorder = new MicRecorder({ 
    bitRate: 64 ,
    prefix: "data:audio/wav;base64,",
});


class Record extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }


  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        const binaryString = btoa(blobURL)
        console.log(binaryString);
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }


  render(){
    return (
      <div className="App">
      
        <header className="App-header">
          <div maxWidth="sm" style={main}>
            <button className='button' style={record} color="primary"  onClick={this.start} disabled={this.state.isRecording}>On</button>
            <button className='button' style={stop} color="primary" onClick={this.stop} disabled={!this.state.isRecording}>Off</button>
          </div>
          <audio src={this.state.blobURL} controls="controls" />
        </header>
      </div>
    );
  }
}



export default Record;