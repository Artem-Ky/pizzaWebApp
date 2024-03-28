

import useScrollToAnchor from "./customHooks/useScrollToAnchor";
import RouterPages from "./routers";
import './App.css'
import getListAnchorNavLinks from "./functions/useGetAnchorNavLinks";



function App() {
  getListAnchorNavLinks();
  useScrollToAnchor();
  return (
    <>
        <RouterPages/>
    </>

  );
}

export default App
