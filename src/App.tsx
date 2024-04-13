import RouterPages from "./routers";
import './App.css'
import useAuthCheck from "./customHooks/useAuthCheck";





function App() {
  useAuthCheck();

  return (
    <>
      <RouterPages />
    </>
  );
}

export default App;
