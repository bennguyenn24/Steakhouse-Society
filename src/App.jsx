import "./App.css";
import Navbar from "./components/Navbar";
import ChickenPork from "./pages/ChickenPork";
import Steaks from "./pages/Steaks";
import Seafood from "./pages/Seafood";
import Home from "./pages/Home";
import { Route , Routes } from 'react-router-dom';

function App() {
	
	return (
		<div className="App">
			<Navbar />
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/steaks" element={<Steaks />}/>
          <Route path="/chickenpork" element={<ChickenPork />}/>
          <Route path="/seafood" element={<Seafood />}/>
        </Routes>
        </div>  
		</div>
	);
}

export default App;
