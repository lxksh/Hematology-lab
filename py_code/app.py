# flask_app.py
from flask import Flask, request, jsonify
from svm_model import predict_result_svm, predict_opt_result_svm
from dt_model import predict_result_dt, predict_opt_result_dt
from knn_model import predict_opt_result_knn, predict_result_knn
from lr_model import predict_result_lr, predict_opt_result_lr
from nb_model import predict_opt_result_nb, predict_result_nb
from rf import predict_result_rf, predict_opt_result_rf

app = Flask(__name__)

@app.route('/predict_svm', methods=['POST'])
def predict_svm():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_svm(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_svm(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route('/predict_dt', methods=['POST'])
def predict_dt():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_dt(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_dt(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/predict_knn', methods=['POST'])
def predict_knn():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_knn(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_knn(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/predict_lr', methods=['POST'])
def predict_lr():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_lr(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_lr(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/predict_nb', methods=['POST'])
def predict_nb():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_nb(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_nb(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/predict_rf', methods=['POST'])
def predict_rf():
    try:
        # Get input data from the request
        data = request.json
        gender = data.get('gender')
        haemoglobin = data.get('haemoglobin')
        mch = data.get('mch')
        mchc = data.get('mchc')
        mcv = data.get('mcv')
        features = data.get('features', 'optimized')

        # Make a prediction using the machine learning model
        if features == 'optimized':
            prediction = predict_opt_result_rf(gender,haemoglobin, mcv)
        elif features == 'all':
            prediction = predict_result_rf(gender, haemoglobin, mch, mchc, mcv)
        else:
            return jsonify({'error': 'Invalid features parameter'}), 400
        # Return the prediction as JSON
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)