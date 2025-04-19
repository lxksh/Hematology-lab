import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}

export const userVerify = (data) => {
    return fetch(`${BACKEND_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

export const pred_svm = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_svm`,data)
}

export const pred_dt = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_dt`,data)
}

export const pred_knn = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_knn`,data)
}

export const pred_lr = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_lr`,data)
}

export const pred_nb = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_nb`,data)
}

export const pred_rf = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/predict_rf`,data)
}