import React from 'react';
import './App.css';
import TranscriptionForm from './TranscriptionForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Whisper Transcription</h1>
            </header>
            <main>
                <TranscriptionForm />
            </main>
        </div>
    );
}

export default App;
