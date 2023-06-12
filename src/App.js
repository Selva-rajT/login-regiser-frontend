import HomePage from "./components/homePage/homePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";
import Registerpage from "./components/registerPage/registerPage";
import OtpPage from "./components/otpPage/otpPage";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        <Route path="/forgot" element={<OtpPage/>}></Route>
      </Routes> */}
      {/* <Registerpage /> */}
      <OtpPage />
     </div>
  );
}

export default App;
