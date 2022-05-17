import { useState } from "react";
import InitPage from "./pages/init/Init";

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

    return <InitPage isLoggedIn={isLoggedIn} onLogin={onChangeLoggedIn} allowedRoles={ROLES}/>;
}

export default App;
