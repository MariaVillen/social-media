import RequireAuth from "./helpers/RequireAuth";

import LoginLayout from "./pages/login-layout/LoginLayout";
import LoginForm from "./components/login-form/LoginForm";
import SignUpForm from "./components/singup-form/SignUpForm";
import ForgotenPass from "./components/forgottenpass/ForgotenPass";
import Unauthorized from "./pages/unauthorized/Unauthorized";

import AppLayout from "./pages/app-layout/AppLayout";
import HomePage from "./pages/home/Home";
import Feed from "./components/feed/Feed.component";
import PostDetail from "./components/post-detail/PostDetail";

import ProfilePage from "./pages/profile/Profile";
import AdminPage from "./pages/admin/Admin";
import UsersPannel from "./components/user-pannel/UserPannel.component";
import ReportPannel from "./components/reports-pannel/ReportPannel.component";

import NotFound from "./pages/notfound/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  const ROLES = {
    admin: 5150,
    user: 2001,
  };

  // Verifty the state of logged or not of user

  return (
    <Routes>
      {/* App Routes */}
      <Route element={<RequireAuth allowedRoles ={[ROLES.user, ROLES.admin]}/>}>
        <Route element={<AppLayout adminAccess={[ROLES.admin]}/>}>
          <Route path="/" element={<HomePage />}>
            <Route index path="/" element={<Feed />} />
            <Route path="post/:id" element={<PostDetail />} />
          </Route>
          <Route
            path="profile/:id"
            element={<ProfilePage/>}
          />
        </Route>
      </Route>
      <Route element={<RequireAuth allowedRoles ={[ROLES.admin]}/>}>
        <Route element={<AppLayout adminAccess ={[ROLES.admin]}/>}>

          <Route
            path="admin"
            element={<AdminPage allowedRoles={[ROLES.admin]} />}
          >
            <Route index path="" element={<UsersPannel />} />
            <Route path="reports" element={<ReportPannel />} />

          </Route>
          
        </Route>
      </Route>

      {/* Authentication Routes */}

      <Route path="/" element={<LoginLayout />}>
        <Route index path="login" element={<LoginForm />} />
        <Route path="register" element={<SignUpForm />} />
        <Route path="forgottenPass" element={<ForgotenPass />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* Cath All */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
