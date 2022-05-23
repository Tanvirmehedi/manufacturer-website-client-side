import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import AddAProduct from "./pages/ManageProduct/AddAProduct";
import PageNotFound from "./pages/PageNotFound";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddAProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
