

import os
from flask import Flask, jsonify, request
from transformers import pipeline

app = Flask(__name__)

model_path = ".\\model"
emotion = pipeline("sentiment-analysis", model=model_path, tokenizer=model_path, top_k=None)


@app.route("/")
def predict():
    
    data = request.json
    if "input" in data:
        return emotion(data['input'])
    return jsonify(code= 400, message="bad input")


if __name__ == '__main__':
    print(emotion("help help help"))
    app.run()