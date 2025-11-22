import joblib
import os
import json
import pandas as pd
import sys


from cleaner import Cleaner  

cleaner = Cleaner()  

# SageMaker entry functions
def model_fn(model_dir):
    model_path = os.path.join(model_dir, "model.joblib")
    model = joblib.load(model_path)
    return model

def input_fn(request_body, request_content_type):
    if request_content_type == "application/json":
        data = json.loads(request_body)
        df = cleaner.transform(data['text']) 
        return df
    else:
        raise ValueError(f"Unsupported content type: {request_content_type}")

def predict_fn(input_data, model):
    preds = model.predict(input_data)
    return preds.tolist()

def output_fn(prediction, content_type):
    if content_type == "application/json":
        return json.dumps({"predictions": prediction})
    else:
        raise ValueError(f"Unsupported content type: {content_type}")
