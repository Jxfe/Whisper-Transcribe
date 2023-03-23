# Whisper Transcribe Application

This is a web application that transcribes audio files using the Whisper ASR API. The application is built using Flask for the server-side and React for the client-side.

## Server-Side

The server-side code is written in Python using Flask as the web framework. The server provides a RESTful API that accepts a POST request with an audio file and responds with the transcribed text. The transcription is performed using the Whisper ASR API. The server-side code is located in the `app.py` file.

## Client-Side

The client-side code is written in React and is located in the `TranscriptionForm.js` file. The web page displays a form that allows the user to upload an audio file and initiate the transcription process. Once the transcription is complete, the transcribed text is displayed on the web page.

## Installation

To run this application, you will need to have Python and Node.js installed on your computer.

1. Clone this repository to your local machine.
2. Install the required Python packages by running the following command in the project directory:

   `pip install -r requirements.txt`

3. Install the required Node.js packages by running the following command in the project directory:

   `npm install`

## Usage

To run the server, execute the command `python app.py` in the terminal. The server will be available at `http://localhost:5000/`.

To run the client-side code, execute the command `npm start` in the terminal. The application will be available in the web browser at `http://localhost:3000/`.

