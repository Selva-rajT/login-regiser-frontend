import HomePage from "./components/homePage/homePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";
import Registerpage from "./components/registerPage/registerPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
      </Routes>
      {/* <Registerpage /> */}
     </div>
  );
}

export default App;
