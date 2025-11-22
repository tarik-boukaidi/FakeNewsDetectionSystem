import os 
from sagemaker.sklearn.estimator import SKLearn
from sagemaker.inputs import TrainingInput
from dotenv import load_dotenv
load_dotenv()
# Load the env variables 
role = os.getenv('ROLE_ARN')
training_path = os.getenv('TRAINING_INPUT')
config_path = os.getenv('TRAINING_CONFIG')
output_path = os.getenv('MODEL_OUTPUT')
REGION = os.getenv('AWS_DEFAULT_REGION')
# Print the Region 
print("Region : ",REGION)
# Allow the cheapest instance otherwise use the affordable and compatible one 
instance = 'ml.t2.medium' if REGION == "us-east-1" else 'ml.t2.medium'
# Define the traning job
estimator = SKLearn(
    entry_point="src/train.py",         
    source_dir="ML",                
    role=role,
    instance_count=1,
    instance_type=instance,
    framework_version="1.2-1",
    py_version="py3",
    output_path=output_path   
)

# Inputs mapping for the training dataset 
train_input = TrainingInput(
    s3_data=training_path,
    content_type="text/csv"
)
# Inpput mapping for the model parameters 
config_input = TrainingInput(
    s3_data=config_path,
    content_type="application/json"
)

# Start training
estimator.fit({
    "train": train_input,
    "config": config_input
})