# py -m flask run

from flask import Flask, render_template, url_for, flash, redirect, request
from forms import TextForm
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

@app.route("/")
def home():
    form = TextForm()
    return render_template('form.html', title='Register', form = form)


@app.route('api/submit/', methods=['POST'])
def submit():
    if request.method == 'POST':
        data = request.get_json()
        
        # return data + hello world
        return data + "hello world"



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
