from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo


class TextForm(FlaskForm):
    textField = StringField('', validators=[DataRequired(), Length(min=20, max=100)])
    submit = SubmitField('Submit')