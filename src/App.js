import { Routes, Route, BrowserRouter } from "react-router-dom";

import InitPage from './pages/init/Init';
import HomePage from "./pages/home/Home";
import ProfilePage from "./pages/profile/Profile";
import LoginPage from "./pages/login";
import ReportPage from "./pages/reports/Report";

function App() {

  return (
  <BrowserRouter>
    <InitPage isLoggedIn={true}>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/reports" element={<ReportPage />}/>
      </Routes>
    </InitPage>
  </BrowserRouter>
  )

}

export default App;


//https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLK-8DbjfYVG9OVuxSxhtTZGeSrTAy1F3R&index=40&ab_channel=LamaDev
//1:51:35 / profile

