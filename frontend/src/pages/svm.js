import React from 'react'
import { useState } from 'react'
import { pred_svm } from '../services/Apis';
import "../styles/dropdown.css"
import "../styles/forms.css"

const SVM = () => {

  const [gender, setGender] = useState('');
  const [haemoglobin, setHaemoglobin] = useState('');
  const [mch, setMch] = useState('');
  const [mchc, setMchc] = useState('');
  const [mcv, setMcv] = useState('');
  const [predictionOptimized, setPredictionOptimized] = useState(null);
  const [predictionAllFeatures, setPredictionAllFeatures] = useState(null);


  const makePrediction = async (input) => {
    try {
      // Prediction using all features
      const responseAllFeatures = await pred_svm({gender, haemoglobin,mch, mchc, mcv,features: 'all',});
      setPredictionAllFeatures(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error.message);
    }
  };
  const makeoptPrediction = async (input) => {
    try {
      // Prediction using optimized features
      const responseOptimized = await pred_svm({gender,haemoglobin,mcv,features:'optimized'});
      setPredictionOptimized(responseOptimized.data.prediction);

    } catch (error) {
      console.error('Error making prediction:', error.message);
    }
  };

  return (
    <>
    <section>
    <div className="form_data">
        <div className="form_heading">
              <h2>SVM</h2>
              <p>This model is 99.4% accurate</p>
        </div>
        <form>
          <div className="form_input">
            <label htmlFor='gender'>Gender</label><br />
            <input type="number" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>
          <div className="form_input">
            <label htmlFor='haemoglobin'>Haemoglobin</label><br />
            <input type="number" value={haemoglobin} onChange={(e) => setHaemoglobin(e.target.value)} />
          </div>
          <div className="form_input">
            <label htmlFor='mch'>MCH</label><br />
            <input type="number" value={mch} onChange={(e) => setMch(e.target.value)} />
          </div>
          <div className="form_input">
            <label htmlFor='mchc'>MCHC</label><br />
            <input type="number" value={mchc} onChange={(e) => setMchc(e.target.value)} />
          </div>
          <div className="form_input">
            <label htmlFor='mcv'>MCV</label><br />
            <input type="number" value={mcv} onChange={(e) => setMcv(e.target.value)} />
          </div>
          
        </form>

      <button className='btn' onClick={() => makeoptPrediction({ gender, haemoglobin, mch, mchc, mcv })}>
        Predict Optimized
      </button>
      {predictionOptimized !== null && <p>Prediction Result (Optimized): {predictionOptimized}</p>}

      <button className="btn" onClick={() => makePrediction({ gender,haemoglobin, mch, mchc,mcv })}>
        Predict All Features
      </button>
      {predictionAllFeatures !== null && <p>Prediction Result (All Features): {predictionAllFeatures}</p>}
    </div>
  </section>
  </>
  )   
}


export default SVM