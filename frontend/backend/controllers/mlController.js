const axios = require('axios');
const PredictedData = require('../models/db_model'); // Import the new model
const express = require("express");

exports.prediction_svm =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_svm', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_dt =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_dt', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_knn =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_knn', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_lr =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_lr', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_nb =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_nb', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_rf =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        // Make a request to Flask API for prediction
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_rf', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        // Store the input data and prediction in MongoDB
        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        // Return the prediction and stored data
        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};