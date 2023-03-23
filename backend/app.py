from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import base64
import openai
from io import BytesIO
import json

OPENAI_API_KEY = '<YOUR OPENAI API KEY HERE>'
openai.api_key = OPENAI_API_KEY

app = Flask(__name__)
CORS(app)

@app.route('/transcribe', methods=['POST'])
def transcribe():
    audio_file = request.files['audio']

    # Transcribe audio using Whisper ASR API
    audio_data = BytesIO(audio_file.read())
    audio_data.name = audio_file.filename
    response = openai.Audio.transcribe("whisper-1",file=audio_data)
    data = str(response)
    data = data[12:-2]
    data = data[:-1]

    return jsonify({"transcription": data})

if __name__ == '__main__':
    app.run(debug=True)
