import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import SVM from './pages/svm';
import DT from './pages/dt';
import KNN from './pages/knn';
import LR from './pages/lr';
import NB from './pages/nb';
import RF from './pages/rf';
import MODELS from './pages/all';
import { useAuthContext } from './pages/useAuthContext';
import { AuthContextProvider } from './reducer/useReducer';

//export const UserContext = createContext();

const Routing = ()=>{
  const { user } = useAuthContext()
  return (
    <>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/ " />} />
        <Route path='/user/otp' element={!user ? <Otp />: <Navigate to="/dashboard" />} />
        <Route path='/svm' element={<SVM />} />
        <Route path='/dt' element={<DT />} />
        <Route path='/knn' element={<KNN />} />
        <Route path='/lr' element={<LR />} />
        <Route path='/nb' element={<NB />} />
        <Route path='/rf' element={<RF />} />
        <Route path='/models' element={<MODELS />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}
const App=()=>{
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routing />
    </AuthContextProvider>
    </>
  );
}

export default App;