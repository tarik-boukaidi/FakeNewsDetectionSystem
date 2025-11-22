from sagemaker.sklearn.model import SKLearnModel
import sagemaker
import os
from dotenv import load_dotenv
from sagemaker.serverless.serverless_inference_config import ServerlessInferenceConfig

load_dotenv()
# load the env variables 
role = os.getenv('ROLE_ARN')
endpoint = os.getenv('SAGEMAKER_ENDPOINT')
MODEL = os.getenv('MODEL_NAME')
s3_model_path = os.path.join(os.getenv('MODEL_OUTPUT'),MODEL)
source_dir = "ML"  

# Create a SageMaker session
session = sagemaker.Session()

# Create the KLearnModel
sk_model = SKLearnModel(
    model_data=s3_model_path,
    role=role,
    entry_point="src/inference.py",  
    source_dir=source_dir,
    framework_version="1.2-1",
    py_version="py3"
)
# Set the serverless config 
serverless_config  = ServerlessInferenceConfig(
        memory_size_in_mb=2048,
        max_concurrency=5
    )
# Deploy serverless endpoint
predictor = sk_model.deploy(
    endpoint_name=endpoint,
    serverless_inference_config=serverless_config
)

print(f"Model deployed")
