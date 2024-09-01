import NavbarComponent from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
