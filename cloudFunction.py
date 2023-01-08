import functions_framework
from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline

tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

emotion = pipeline("sentiment-analysis", model="arpanghoshal/EmoRoBERTa", return_all_scores=True)


@functions_framework.http
def echo(request):
    """HTTP Cloud Function.
   Args:
       request (flask.Request): The request object.
       <https://flask.palletsprojects.com/en/1.1.x/api/#incoming-request-data>
   Returns:
       The response text, or any set of values that can be turned into a
       Response object using `make_response`
       <https://flask.palletsprojects.com/en/1.1.x/api/#flask.make_response>.
   """

    data = request.get_json(silent=True)

    if "input" in data:
        scores = emotion(data['input'])
        return scores
    return 'Bad input. expecting json: {"input": "<phrase here>"}'
