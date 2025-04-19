const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userContollers");
const dbcontrollers = require("../controllers/mlController")

// Routes
router.post("/user/register",controllers.userregister);
router.post("/user/sendotp",controllers.userOtpSend);
router.post("/user/login",controllers.userLogin);
router.post("/user/predict_svm", dbcontrollers.prediction_svm);
router.post("/user/predict_dt", dbcontrollers.prediction_dt);
router.post("/user/predict_knn", dbcontrollers.prediction_knn);
router.post("/user/predict_lr", dbcontrollers.prediction_lr);
router.post("/user/predict_nb", dbcontrollers.prediction_nb);
router.post("/user/predict_rf", dbcontrollers.prediction_rf);

module.exports = router;