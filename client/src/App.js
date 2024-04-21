import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://deploy-mern-api.vercel.app/register', {name, email, password})
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