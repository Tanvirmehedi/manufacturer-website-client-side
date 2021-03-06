import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog/Blog";
import CreateBlog from "./pages/Blog/CreateBlog";
import AllUsers from "./pages/Dashboard/AllUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import MyPortfolio from "./pages/Login/MyPortfolio/MyPortfolio";
import RequireAdmin from "./pages/Login/RequireAdmin";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import AddAProduct from "./pages/ManageProduct/AddAProduct";
import MyProfile from "./pages/MyProfile/MyProfile";
import Profile from "./pages/MyProfile/Profile";
import MyOrder from "./pages/Order/MyOrder";
import PageNotFound from "./pages/PageNotFound";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddAProduct />
              </RequireAdmin>
            }
          />
          <Route path="myprofile" element={<MyProfile />} />
          <Route
            path="createblog"
            element={
              <RequireAdmin>
                <CreateBlog />
              </RequireAdmin>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route
            path="allusers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
