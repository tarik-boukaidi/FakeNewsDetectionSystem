import contractions as ctr
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords,wordnet
from nltk.data import find
from nltk import download
from nltk.stem import WordNetLemmatizer
import pandas as pd
import re


class Cleaner:
    """
    A well documentation will be given later 
    """
    def __init__(self,language:str="english",feature_name:str='joined_tokens'):
        # Check if stop word corpus is downloaded
        for resource in ['wordnet', 'omw-1.4','stopwords']:
            try:
                find(f'corpora/{resource}')
            except LookupError:
                download(resource)

        # set the stopwords 
        self.stopwords = set(stopwords.words(language))
        self.lemmatizer = WordNetLemmatizer()
        self.feature_name = feature_name


    def remove_garbage(self,text:str):
        # Check if text is empty 
        if not text or text.strip() == '':
            return ''
        
        # lower the text 
        text = text.lower()
        # 2. links
        text = re.sub(r"http\S+|www\S+|https\S+", '', text)
        # emails
        text = re.sub(r"\S+@\S+", '', text)
        # @
        text = re.sub(r"@\w+", '', text)
        # html 
        text = re.sub(r'<[^>]+>', '', text)
        # whitespace
        text = re.sub(r'\s+', ' ', text).strip()
        # Punctuation 
        text = re.sub(r'[.,!?;:]', ' ', text)
        # digits 
        text = re.sub(r'\d+', '', text)
        # Quotes 
        text = re.sub(r"[\"\'\u2018\u2019\u201C\u201D]", '', text)
        return text
    
    def expand_contraction(self,text):
        return ctr.fix(text)
    
    def tokenize(self,text):
        return word_tokenize(text)
    
    def remove_stopwords(self,tokens):
        return [word for word in tokens if word not in self.stopwords]
    
    def lemmatize(self,tokens):
        return [self.lemmatizer.lemmatize(word) for word in tokens]
    
    def join_token(self,tokens):
        return ' '.join(tokens)
    
    def to_df(self,text):
        return pd.DataFrame([text],columns=[self.feature_name])
    
    def remove_u(self,tokens):
        return [word.strip() for word in tokens if word.strip() != 'u']
    

    def transform(self,text):
        text = self.remove_garbage(text)
        text = self.expand_contraction(text)
        tokens =self.tokenize(text)
        tokens = self.remove_stopwords(tokens)
        tokens = self.lemmatize(tokens)
        tokens = self.remove_u(tokens)
        text = self.join_token(tokens)
        df = self.to_df(text)
        return df

