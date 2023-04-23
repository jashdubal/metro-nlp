from transformers import AutoModelForSequenceClassification, AutoTokenizer
import numpy as np
from scipy.special import softmax
import sys

def analyze_sentiment(text):
    MODEL = "distilbert-base-uncased-finetuned-sst-2-english"

    tokenizer = AutoTokenizer.from_pretrained(MODEL)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL)

    encoded_input = tokenizer(text, return_tensors='pt')
    output = model(**encoded_input)
    scores = output.logits.detach().numpy()
    scores = softmax(scores)

    labels = ['negative', 'positive']
    sentiment = labels[np.argmax(scores)]
    return sentiment

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python sentiment.py <text>")
        sys.exit(1)
    text = sys.argv[1]
    sentiment = analyze_sentiment(text)
    print(sentiment)