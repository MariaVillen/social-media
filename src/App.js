import { useState } from "react";
import InitPage from "./pages/init/Init";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function onChangeLoggedIn(logged) {
        setIsLoggedIn(logged);
    }

    return <InitPage isLoggedIn={isLoggedIn} onLogin={onChangeLoggedIn} />;
}

export default App;
