# py -m flask run

from flask import Flask, render_template, url_for, flash, redirect, request
from forms import TextForm
import os

app = Flask(__name__)


@app.route("/")
def home():
    form = TextForm()
    return render_template('form.html', title='Register', form = form)


@app.route('/submit/', methods=['POST'])
def submit():
    if request.method == 'POST':
        form_data = request.form
        return render_template('results.html', result = form_data['text'])


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
