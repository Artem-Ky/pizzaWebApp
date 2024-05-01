import RouterPages from "./routers";
import './App.css'
import useAuthCheck from "./customHooks/useAuthCheck";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from "./Components/ErrorBoundary";





function App() {
  useAuthCheck();

  return (
    <ErrorBoundary>
      <RouterPages />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </ErrorBoundary>
  );
}

export default App;
