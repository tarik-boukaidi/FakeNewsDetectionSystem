import json
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pandas as pd
import joblib
from sklearn.metrics import accuracy_score, precision_recall_fscore_support
import os
DATA_PATH ="/opt/ml/input/data/train/clean_politifact_train_dataset.csv"
CONFIG_PATH = "/opt/ml/input/data/config/params.json"
MODEL_PATH="/opt/ml/model"

# Read the dataset 
df = pd.read_csv(DATA_PATH)
x = df['joined_tokens']
y = df['label']
# Split the data 
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, stratify=y, random_state=42)


# Read the configs 
with open(CONFIG_PATH,'r') as file:
    config = json.load(file)

# model 
model = Pipeline(
    [
        ('tfidf',TfidfVectorizer(**config['tfidf'])),
        ('rf',RandomForestClassifier(**config['rf']))
    ]
)

# Train the model 
model.fit(x_train,y_train)
# Evaluate the model 
y_pred = model.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
precision, recall, f1, _ = precision_recall_fscore_support(y_test, y_pred, average='weighted')

print(f"Test Accuracy: {accuracy:.4f}")
print(f"Test Precision: {precision:.4f}")
print(f"Test Recall: {recall:.4f}")
print(f"Test F1 Score: {f1:.4f}")

# save the model
joblib.dump(model,os.path.join(MODEL_PATH,'model.joblib'))



