import os 
from sagemaker.sklearn.estimator import SKLearn
from sagemaker.inputs import TrainingInput
from sagemaker import Session
from dotenv import load_dotenv
load_dotenv()
role = os.getenv('ROLE_ARN')
training_path = os.getenv('TRAINING_INPUT')
config_path = os.getenv('TRAINING_CONFIG')
output_path = os.getenv('MODEL_OUTPUT')
# Define the traning job
estimator = SKLearn(
    entry_point="src/train.py",         
    source_dir="ML",                
    role=role,
    instance_count=1,
    instance_type="ml.t3.medium",
    framework_version="1.2-1",
    py_version="py3",
    output_path=output_path
    
)

# Inputs mapping
train_input = TrainingInput(
    s3_data=training_path,
    content_type="text/csv"
)

config_input = TrainingInput(
    s3_data=config_path,
    content_type="application/json"
)

# Start training
estimator.fit({
    "train": train_input,
    "config": config_input
})