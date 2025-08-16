import Navbar from "./layouts/Navbar";
import Bottombar from "./layouts/Bottombar";
import "./assets/global.css";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="container-fluid app-grid">
      <div className="navbar p-1 bg-light">
        <Navbar />
      </div>
      <div className="p-3 bg-info overflow-auto">
        <Login />
      </div>
      <div className="bottombar p-3 bg-danger">
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
