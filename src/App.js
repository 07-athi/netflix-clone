import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
