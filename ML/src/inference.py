import os
import json
import joblib
import tarfile
import boto3
from flask import Flask, request, jsonify
from cleaner import Cleaner

app = Flask(__name__)
cleaner = Cleaner()

# S3 bucket and key (can also use environment variables)
S3_BUCKET = os.environ.get("MODEL_BUCKET")
S3_KEY = os.environ.get("MODEL_KEY")
LOCAL_MODEL_DIR = "/tmp/model"
LOCAL_MODEL_ARCHIVE = os.path.join("/tmp", "pipeline_model.tar.gz")

# Download the model from S3 if not already present
if not os.path.exists(LOCAL_MODEL_ARCHIVE):
    s3 = boto3.client("s3")
    s3.download_file(S3_BUCKET, S3_KEY, LOCAL_MODEL_ARCHIVE)

# Extract tar.gz if not already extracted
if not os.path.exists(LOCAL_MODEL_DIR):
    os.makedirs(LOCAL_MODEL_DIR, exist_ok=True)
    with tarfile.open(LOCAL_MODEL_ARCHIVE, "r:gz") as tar:
        tar.extractall(path=LOCAL_MODEL_DIR)

# Load model once at startup
model = None

@app.before_first_request
def load_model():
    global model
    model_file_path = os.path.join(LOCAL_MODEL_DIR, "pipeline_model.joblib")
    if os.path.exists(model_file_path):
        model = joblib.load(model_file_path)
    else:
        raise FileNotFoundError(f"Model file not found at {model_file_path}")

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
