import React, { useState } from 'react';
import axios from 'axios';
import './TranscriptionForm.css';

const TranscriptionForm = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [status, setStatus] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        setStatus('Transcribing...');

        const formData = new FormData();
        formData.append('audio', audioFile);

        try {
            const response = await axios.post('http://localhost:5000/transcribe', formData);
            setTranscription(response.data.transcription);
            setStatus('Transcription complete.');
        } catch (error) {
            console.error('Error during transcription:', error);
            setStatus('Error during transcription.');
        }
    };

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
        setTranscription('');
        setStatus('');
    };

    return (
        <div className="container">
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="audio">Upload audio file:</label>
                    <input type="file" id="audio" onChange={handleFileChange} />
                </div>
                <button type="submit">{status === 'Transcribing...' ? status : 'Transcribe'}</button>
            </form>
            {transcription && (
                <div className="transcription-box">
                    <h2>Transcription:</h2>
                    <div className="scrollable-content">
                        <p>{transcription}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranscriptionForm;
