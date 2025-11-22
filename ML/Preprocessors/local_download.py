import nltk


nltk_path='../src/nltk_data'
# Download the ntlk data to be use by the container
nltk.download('omw-1.4', download_dir=nltk_path)
nltk.download('stopwords', download_dir=nltk_path)
nltk.download('wordnet',download_dir=nltk_path)
