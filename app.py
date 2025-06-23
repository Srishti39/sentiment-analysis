from flask import Flask, request, jsonify, render_template
from textblob import TextBlob

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comments = data.get('comments', [])

    results = []
    sentiment_count = {'positive': 0, 'negative': 0, 'neutral': 0}

    for text in comments:
        blob = TextBlob(text)
        polarity = blob.sentiment.polarity

        if polarity > 0.2:
            sentiment = 'Positive'
            sentiment_count['positive'] += 1
        elif polarity < -0.2:
            sentiment = 'Negative'
            sentiment_count['negative'] += 1
        else:
            sentiment = 'Neutral'
            sentiment_count['neutral'] += 1

        results.append({'comment': text, 'sentiment': sentiment})

    return jsonify({'results': results, 'chartData': sentiment_count})

if __name__ == '__main__':
    app.run(debug=True)
