import React, { useState, useEffect } from "react";
import {
  pred_dt,
  pred_rf,
  pred_knn,
  pred_lr,
  pred_nb,
  pred_svm,
} from "../services/Apis";
import "../styles/dropdown.css";
import "../styles/forms.css";
import "../styles/table.css";

const MODELS = () => {
  const [formData, setFormData] = useState({});
  const [selectedTestData, setSelectedTestData] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [predictionOptimized_dt, setPredictionOptimizedDT] = useState(null);
  const [predictionAllFeatures_dt, setPredictionAllFeaturesDT] = useState(null);
  const [predictionOptimized_rf, setPredictionOptimizedRF] = useState(null);
  const [predictionAllFeatures_rf, setPredictionAllFeaturesRF] = useState(null);
  const [predictionOptimized_svm, setPredictionOptimizedSVM] = useState(null);
  const [predictionAllFeatures_svm, setPredictionAllFeaturesSVM] =
    useState(null);
  const [predictionOptimized_lr, setPredictionOptimizedLR] = useState(null);
  const [predictionAllFeatures_lr, setPredictionAllFeaturesLR] = useState(null);
  const [predictionOptimized_nb, setPredictionOptimizedNB] = useState(null);
  const [predictionAllFeatures_nb, setPredictionAllFeaturesNB] = useState(null);
  const [predictionOptimized_knn, setPredictionOptimizedKNN] = useState(null);
  const [predictionAllFeatures_knn, setPredictionAllFeaturesKNN] =
    useState(null);

  const testingData = [
    {
      gender: 1,
      haemoglobin: 14.7,
      mch: 22,
      mchc: 28.2,
      mcv: 99.5,
      result: "non-anemic",
    },
    {
      gender: 0,
      haemoglobin: 14.1,
      mch: 29.7,
      mchc: 30.5,
      mcv: 75.2,
      result: "non-anemic",
    },
    {
      gender: 1,
      haemoglobin: 10.5,
      mch: 28.3,
      mchc: 28.7,
      mcv: 100.1,
      result: "anemic",
    },
    {
      gender: 0,
      haemoglobin: 13.9,
      mch: 29.7,
      mchc: 28.4,
      mcv: 70.7,
      result: "non-anemic",
    },
  ];

  useEffect(() => {
    // Fetch initial data or perform any necessary operations
  }, []);

  const handleDropdownChange = (e) => {
    const data = JSON.parse(e.target.value);
    setSelectedTestData(data);
    setFormData(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = async () => {
    await Promise.all([
      makePredictionDT(),
      makePredictionRF(),
      makePredictionKNN(),
      makePredictionLR(),
      makePredictionNB(),
      makePredictionSVM(),
    ]);
    setShowTable(true);
  };

  const makePredictionDT = async () => {
    try {
      const responseOptimized = await pred_dt({
        // ... Include other data properties
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedDT(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_dt({
        // ... Include other data properties
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesDT(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const makePredictionRF = async () => {
    try {
      const responseOptimized = await pred_rf({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedRF(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_rf({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesRF(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const makePredictionSVM = async () => {
    try {
      const responseOptimized = await pred_svm({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedSVM(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_svm({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesSVM(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const makePredictionLR = async () => {
    try {
      const responseOptimized = await pred_lr({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedLR(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_lr({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesLR(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const makePredictionNB = async () => {
    try {
      const responseOptimized = await pred_nb({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedNB(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_nb({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesNB(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const makePredictionKNN = async () => {
    try {
      const responseOptimized = await pred_knn({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "optimized",
      });
      setPredictionOptimizedKNN(responseOptimized.data.prediction);

      const responseAllFeatures = await pred_knn({
        gender: formData.gender,
        haemoglobin: formData.haemoglobin,
        mch: formData.mch,
        mchc: formData.mchc,
        mcv: formData.mcv,
        features: "all",
      });
      setPredictionAllFeaturesKNN(responseAllFeatures.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error.message);
    }
  };

  const renderInputFields = () => {
    return (
      <div className="input-fields">
        {selectedTestData
          ? Object.keys(testingData[0]).map((key, index) => (
              <React.Fragment key={index}>
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formData[key] || ""}
                  disabled
                />
              </React.Fragment>
            ))
          : Object.keys(testingData[0]).map((key, index) => (
              <React.Fragment key={index}>
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  onChange={handleInputChange}
                  value={formData[key] || ""}
                />
              </React.Fragment>
            ))}
      </div>
    );
  };

  const renderTable = () => {
    if (
      predictionOptimized_dt === null ||
      predictionOptimized_rf === null ||
      predictionOptimized_svm === null ||
      predictionOptimized_lr === null ||
      predictionOptimized_nb === null ||
      predictionOptimized_knn === null
    ) {
      return null;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Optimized Features</th>
            <th>All Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decision Tree</td>
            <td>{predictionOptimized_dt}</td>
            <td>{predictionAllFeatures_dt}</td>
          </tr>
          <tr>
            <td>Random Forest</td>
            <td>{predictionOptimized_rf}</td>
            <td>{predictionAllFeatures_rf}</td>
          </tr>
          <tr>
            <td>SVM</td>
            <td>{predictionOptimized_svm}</td>
            <td>{predictionAllFeatures_svm}</td>
          </tr>
          <tr>
            <td>Linear Regression</td>
            <td>{predictionOptimized_lr}</td>
            <td>{predictionAllFeatures_lr}</td>
          </tr>
          <tr>
            <td>NB</td>
            <td>{predictionOptimized_nb}</td>
            <td>{predictionAllFeatures_nb}</td>
          </tr>
          <tr>
            <td>KNN</td>
            <td>{predictionOptimized_knn}</td>
            <td>{predictionAllFeatures_knn}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h2>Models</h2>
        </div>
        <div className="form_input">
          <label htmlFor="selectedTestData">Select Test Data</label>
          <select
            name="selectedTestData"
            onChange={handleDropdownChange}
            value={selectedTestData ? JSON.stringify(selectedTestData) : ""}
          >
            <option value="" disabled>
              Select Test Data
            </option>
            {testingData.map((data, index) => (
              <option key={index} value={JSON.stringify(data)}>
                Test {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="user_input_fields">
          {renderInputFields()}
          <button className="btn" onClick={handleButtonClick}>
            Make Predictions
          </button>
        </div>

        {showTable && renderTable()}
      </div>
    </section>
  );
};

export default MODELS;
