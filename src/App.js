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

//https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLK-8DbjfYVG9OVuxSxhtTZGeSrTAy1F3R&index=40&ab_channel=LamaDev
//1:51:35 / profile
