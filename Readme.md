# 🧠 Sentiment Analysis Web App

A modern, interactive web application that performs sentiment analysis on user-submitted comments using natural language processing. The app classifies text into **Positive**, **Negative**, or **Neutral**, and visualizes the sentiment distribution using a clean, responsive UI.

---

## ✨ Features

- ✅ Analyze multiple user comments in one go
- ✅ Clean, modern UI with **light/dark mode toggle**
- ✅ Real-time sentiment classification
- ✅ Visual feedback via animated **Chart.js** graphs
- ✅ No external APIs or API keys required
- ✅ Handles nuanced language and sarcasm using `TextBlob`
- ✅ 100% local processing (privacy-friendly)

---

## 🧰 Tech Stack

|    Layer      |                Technology                     |
|---------------|---------------------------------------------- |
| Frontend      | HTML, CSS (Custom + Variables), JavaScript    |
| Backend       | Python, Flask                                 |
| NLP Engine    | TextBlob (built on NLTK & Pattern)            |
| Visualization | Chart.js                                      |
| UI Theme      | Custom CSS with Dark Mode Support             |

---

## 📁 Project Structure

sentiment_analysis

1. app.py # Flask backend
2. templates/index.html # Frontend HTML
3. static/style.css # Custom styles
4. script.js # Frontend logic
5. README.md # Project documentation

---

## 🚀 Getting Started

### 1. ✅ Prerequisites

- Python 3.8 or higher
- `pip` package manager

### 2. 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sentiment-analysis-app.git
cd sentiment_analysis

# (Optional) Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Download NLTK corpora for TextBlob
python -m textblob.download_corpora

## 📁 Project Structure

sentiment_analysis

1. app.py # Flask backend
2. templates/index.html # Frontend HTML
3. static/style.css # Custom styles
4. script.js # Frontend logic
5. README.md # Project documentation

---

## 🚀 Getting Started

### 1. ✅ Prerequisites

- Python 3.8 or higher
- `pip` package manager
