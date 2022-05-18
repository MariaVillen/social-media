import { useState } from "react";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/Home";
import ProfilePage from "./pages/profile/Profile";
import AdminPage from "./pages/admin/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
    const ROLES = {
        "Admin": 5051,
        "User": 4010
    }


    // Verifty the state of logged or not of user
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function onChangeLoggedIn(logged) {
        setIsLoggedIn(logged);
    }

    return isLoggedIn ? 
            <BrowserRouter>
                <Layout onLogin={onChangeLoggedIn} allowedRoles={ROLES}>
                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage allowedRoles={[ROLES.User, ROLES.Admin]}/>} />
                    <Route path="/admin" element={<AdminPage allowedRoles={[ROLES.Admin]} />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
         : 
        <Login onLogin={onChangeLoggedIn} />
    };
    

export default App;
