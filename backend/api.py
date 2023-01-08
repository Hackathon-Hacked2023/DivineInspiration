import time
from flask import Flask, request, render_template, jsonify
from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline

app = Flask(__name__)

model = None

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/submit', methods=['POST'])
def submit():
    global model
    data = request.get_json()
    emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa')
    emotion_labels = emotion(data['mytext'])
    return jsonify(emotion_labels)

def ml():
    global emotion
    tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
    model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

if __name__ == "__main__":
    ml()
    app.run()