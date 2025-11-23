import os
from dotenv import load_dotenv
import sagemaker
from sagemaker.model import Model
from sagemaker.serverless.serverless_inference_config import ServerlessInferenceConfig

load_dotenv()

# Load environment variables
role = os.getenv('ROLE_ARN')
endpoint = os.getenv('SAGEMAKER_ENDPOINT')
ecr_image = os.getenv('IMAGE_URI')  
s3_model_path = os.getenv('MODEL_OUTPUT')
model_data = os.path.join(s3_model_path,'piepline_model.tar.gz')
source_dir = "ML/src" 

# Create SageMaker session
session = sagemaker.Session()

# set the configuration of the container 
sk_model = Model(
    image_uri=ecr_image, 
    model_data=s3_model_path,
    role=role,
    entry_point="inference.py",
    source_dir=source_dir,
    env={
        "MODEL_BUCKET": s3_model_path,
        "MODEL_KEY": 'pipeline_model.tar.gz'
    },
    sagemaker_session=session
)

# Configure serverless inference
serverless_config = ServerlessInferenceConfig(
    memory_size_in_mb=2048,
    max_concurrency=5
)

# Deploy the model
predictor = sk_model.deploy(
    endpoint_name=endpoint,
    serverless_inference_config=serverless_config
)

print(f"Model deployed at endpoint: {endpoint}")
