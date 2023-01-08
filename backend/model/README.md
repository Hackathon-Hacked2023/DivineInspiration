---
language: en
tags:
- text-classification
- tensorflow
- roberta
datasets:
- go_emotions
license: mit
---

- [linkedin.com/in/arpanghoshal](https://www.linkedin.com/in/arpanghoshal)
- [linkedin.com/in/rohanrkamath](https://www.linkedin.com/in/rohanrkamath)


## What is GoEmotions

Dataset labelled 58000 Reddit comments with 28 emotions

- admiration, amusement, anger, annoyance, approval, caring, confusion, curiosity, desire, disappointment, disapproval, disgust, embarrassment, excitement, fear, gratitude, grief, joy, love, nervousness, optimism, pride, realization, relief, remorse, sadness, surprise + neutral


## What is RoBERTa

RoBERTa builds on BERT’s language masking strategy and modifies key hyperparameters in BERT, including removing BERT’s next-sentence pretraining objective, and training with much larger mini-batches and learning rates. RoBERTa was also trained on an order of magnitude more data than BERT, for a longer amount of time. This allows RoBERTa representations to generalize even better to downstream tasks compared to BERT.


## Hyperparameters

| Parameter         |      |
| ----------------- | :---: |
| Learning rate     | 5e-5 |
| Epochs            |   10 |
| Max Seq Length    |   50 |
| Batch size        |   16 |
| Warmup Proportion | 0.1 |
| Epsilon      | 1e-8 |


## Results

Best Result of `Macro F1` - 49.30%

## Usage

```python

from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline

tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

emotion = pipeline('sentiment-analysis', 
                    model='arpanghoshal/EmoRoBERTa')

emotion_labels = emotion("Thanks for using it.")
print(emotion_labels)

```
Output 

```
[{'label': 'gratitude', 'score': 0.9964383244514465}]
```

