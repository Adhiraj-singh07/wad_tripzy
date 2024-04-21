import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import axios from 'axios'
import { useState } from "react";



function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [gender, setName] = useState()
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://https://wad-tripzy-api.vercel.app/signup', { email, password,gender})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;