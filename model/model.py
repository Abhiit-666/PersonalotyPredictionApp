import pandas as pd
import numpy as np

df=pd.read_csv("./MBTI_500.csv")

df=df.dropna(axis=0)
print(df.head())

X=df.iloc[:,0].values
Y=df.iloc[:,1].values

