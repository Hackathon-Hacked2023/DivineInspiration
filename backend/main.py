# py -m flask run

from flask import Flask, render_template, url_for, flash, redirect, request, jsonify
from flask_cors import CORS
import os
from transformers import pipeline

print("help", os.getcwd(), os.listdir())
modelPath = "./model"
emotion = pipeline("sentiment-analysis", model=modelPath, tokenizer=modelPath, top_k = None)

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

# @app.route("/")
# def home():
#     form = TextForm()
#     return render_template('form.html', title='Register', form = form)


@app.route('/submit/', methods=['POST'])
def submit():
    if request.method == 'POST':
        form_data = request.form
        return render_template('results.html', result = form_data['text'])
    
    
@app.route("/tonetelling", methods=["POST"])
def tonetelling():
    
    data = request.json
    
    if "input" in data:
        return emotion(data["input"])
    return jsonify(code = 400, message="bad input")



if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
