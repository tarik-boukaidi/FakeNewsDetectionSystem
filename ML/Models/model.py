import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.tree import DecisionTreeClassifier


df = pd.read_csv("clean_politifact_train_dataset.csv")
data = df.drop(["tokens","joined_tokens"],axis=1)
data = data.sample(frac=1).reset_index(drop=True)

x= data['news']
y= data['label']
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

vectorizer = TfidfVectorizer()
X_train = vectorizer.fit_transform(x_train) 
X_test = vectorizer.transform(x_test)

model = DecisionTreeClassifier()
model.fit(X_train, y_train)
y_pred= model.predict(X_test)
print(model.score(X_test,y_test))


def predict_news(text):
    text_tfidf = vectorizer.transform([text])
    prediction = model.predict(text_tfidf)
    if prediction[0] == 1:
        return "Fake News"
    else:
        return "True News"
new_text = "Aliens landed in downtown last night and met the mayor."
result = predict_news(new_text)
print(f"The news is classified as: {result}")







