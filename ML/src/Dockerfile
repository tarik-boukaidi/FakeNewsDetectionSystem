# using the python3.13 package 
FROM python:3.13-slim

# Set working directory
WORKDIR /app


# Copy source code
COPY . /app/src/
# Set sagemaker environment variables
ENV PYTHONUNBUFFERED=TRUE
ENV PYTHONDONTWRITEBYTECODE=TRUE
ENV PATH="/app:${PATH}"
# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r src/requirements.txt

# SET the INFERENCE VARIABLE 
ENV SAGEMAKER_PROGRAM=src/inference.py

# Command to start Gunicorn server
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "src.inference:app"]

