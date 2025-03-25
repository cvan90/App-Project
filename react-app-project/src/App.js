import Home from "./components/Home"
//import {BrowserRouter, Routes, Route} from "react-router-dom"
import {HashRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
<HashRouter>            
      <Routes>      
        <Route path="/" element={<Home/>}/>
      </Routes>
    </HashRouter>   
    </>
  );
}

export default App;
