import Login from "../login/Login";
import Layout from "../layout/Layout";
import HomePage from "../home/Home";
import ProfilePage from "../profile/Profile";
import AdminPage from "../admin/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page bypass to home or login depending on login state

const InitPage = (props) => {
  // To know if the user is logged in or not. 
  // If logged goes to site, if not, goes to login and signup forms
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? (
    <BrowserRouter>
      <Layout onLogin={props.onLogin}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  ) : (
    <Login onLogin={props.onLogin} />
  );
};

export default InitPage;
