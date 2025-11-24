# using the python3.13 package 
FROM python:3.13-slim

# Set working directory
WORKDIR /app
# Telling Sage Maker that this Container build by me so it won't look for serve executable
LABEL com.amazonaws.sagemaker.capabilities.accept-bindto-port=true
# set this for serverless deployement
LABEL com.amazonaws.sagemaker.capabilities.multi-models=false

ENV SAGEMAKER_SERVE_PORT=8080

# Copy source code
COPY ML/src/ /app/
# Set sagemaker environment variables
ENV PYTHONUNBUFFERED=TRUE
ENV PYTHONDONTWRITEBYTECODE=TRUE
ENV PATH="/app:${PATH}"
# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# EXPOSE required port
EXPOSE 8080

# Command to start Gunicorn server
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "inference:app"]

