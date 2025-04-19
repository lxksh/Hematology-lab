import pandas as pd # for data manipulation and analysis
from sklearn.svm import SVC # for implementing Support Vector Machine (SVM) algorithm
from sklearn.model_selection import train_test_split # for splitting data into training and testing sets
from imblearn.over_sampling import  ADASYN
import warnings
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 5000) # for setting the maximum number of columns to display in pandas dataframes

df = pd.read_csv('/Users/reenipinninti/Documents/ps_code_mern 2/py_code/anemia.csv')

def predict_opt_result_svm(gender, hemoglobin, mcv ):

    X = df[["Gender", "Hemoglobin", "MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    # Adasyn
    adasyn = ADASYN(random_state=42)
    X_train_adasyn, y_train_adasyn = adasyn.fit_resample(X_train, y_train)

    clf = SVC(gamma='auto')
    clf.fit(X_train_adasyn,y_train_adasyn)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"
    
def predict_result_svm(gender, hemoglobin, mch, mchc, mcv ):

    X = df[["Gender", "Hemoglobin","MCH", "MCHC","MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    # Adasyn
    adasyn = ADASYN(random_state=42)
    X_train_adasyn, y_train_adasyn = adasyn.fit_resample(X_train, y_train)

    clf = SVC(gamma='auto')
    clf.fit(X_train_adasyn,y_train_adasyn)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCH':mch, 'MCHC': mchc,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"