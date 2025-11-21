from sagemaker.sklearn.model import SKLearnModel
import sagemaker
import os
from dotenv import load_dotenv

load_dotenv()

role = os.getenv('ROLE_ARN')

region = os.getenv('REGION_NAME')
endpoint = os.getenv('SAGEMAKER_ENDPOINT')
# Path to your trained model in S3
s3_model_path = os.path.join(os.getenv('MODEL_OUTPUT'),'model.joblib')
source_dir = "ML"  

# Create a SageMaker session
session = sagemaker.Session()

# Create the SageMaker SKLearnModel
sk_model = SKLearnModel(
    model_data=s3_model_path,
    role=role,
    entry_point="src/inference.py",  
    source_dir=source_dir,
    framework_version="1.2-1",
    py_version="py3"
)

# Deploy the model
predictor = sk_model.deploy(
    initial_instance_count=1,
    instance_type="ml.t3.medium",  
    endpoint_name=endpoint
)

print(f"Model deployed")
