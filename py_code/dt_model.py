import pandas as pd # for data manipulation and analysis
from sklearn.tree import DecisionTreeClassifier # for implementing Support Vector Machine (SVM) algorithm
from sklearn.model_selection import train_test_split # for splitting data into training and testing sets
import warnings
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 5000) # for setting the maximum number of columns to display in pandas dataframes

df = pd.read_csv('/Users/reenipinninti/Documents/ps_code_mern 2/py_code/anemia.csv')

def predict_opt_result_dt(gender, hemoglobin, mcv ):

    X = df[["Gender", "Hemoglobin", "MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    clf = DecisionTreeClassifier()
    clf.fit(X_train,y_train)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"
    
def predict_result_dt(gender, hemoglobin, mch, mchc, mcv ):

    X = df[["Gender", "Hemoglobin","MCH", "MCHC","MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    clf = DecisionTreeClassifier()
    clf.fit(X_train,y_train)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCH':mch, 'MCHC': mchc,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"