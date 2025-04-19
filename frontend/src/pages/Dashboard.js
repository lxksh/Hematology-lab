import React from 'react'
import { useState } from 'react'
import "../styles/dropdown.css"
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
  };

  return (
    <>
        <section>
        <h1>Dashboard</h1>
        <p>
          Predicting Anemia for a Healthier Tomorrow. Unlock personalized insights on your anemia risk with our website. Our predictive tools use advanced analytics to forecast anemia likelihood, empowering you to take proactive steps towards a healthier life.
        </p>
        <p><b>Why predictive Anemia matters?</b><br/>Anemia, a condition characterized by a shortage of red blood cells, can impact overall health and well-being. Early detection is key to effective intervention and improved outcomes.</p>
        <p>Our wesite uses various models for predicting anemia, hence you can get the best result.The models used are:<br/>1.Decision Tree <br/>2.Random Forest <br/>3.SVM <br/>4.KNN <br/>5.Gaussian Naive Bayes <br/>6.Linear Regression</p>

        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            Select your Model
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/dt">Decision Tree</Link><br/>
              <Link to="/rf">Random Forest</Link><br/>
              <Link to="/svm">SVM</Link><br/>
              <Link to="/knn">KNN</Link><br/>
              <Link to="/nb">Gaussian Naive Bayes</Link><br/>
              <Link to="/lr">Linear Regression</Link><br/>
              <Link to="/models">All models</Link><br/>
            </div>
          )}
        </div>
      </section>
    </>
  )
}


export default Dashboard