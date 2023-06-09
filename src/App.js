import HomePage from "./components/homePage/homePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>

     </div>
  );
}

export default App;
