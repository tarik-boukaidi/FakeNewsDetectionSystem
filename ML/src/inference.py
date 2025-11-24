import os
import json
import joblib
import tarfile
import boto3
from flask import Flask, request, jsonify
from cleaner import Cleaner

app = Flask(__name__)
cleaner = Cleaner()

# Load the model once at startup
MODEL_NAME = os.getenv('MODEL_NAME')
model_path = os.path.join("/opt/ml/model",MODEL_NAME)
model = joblib.load(model_path)

@app.route("/ping", methods=["GET"])
def ping():
    return "pong", 200

@app.route("/invocations", methods=["POST"])
def invoke():
    if request.content_type != "application/json":
        return jsonify({"error": f"Unsupported content type: {request.content_type}"}), 400

    input_data = request.get_json()
    df = cleaner.transform(input_data['text'])
    preds = model.predict(df)
    return jsonify({"predictions": preds.tolist()})
