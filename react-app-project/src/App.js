import Home from "./components/Home"
//import {BrowserRouter, Routes, Route} from "react-router-dom"
import {HashRouter, Routes, Route} from "react-router-dom"
import About from "./components/About"
import NavBar from "./components/NavBar";
function App() {

  return (
    <>
<HashRouter>            
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </HashRouter>   
    </>
  );
}

export default App;
