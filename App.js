import React, { useState } from "react";
import Dashboard from "./src/test/Dashboard";
import LoginScreen from "./src/test/LoginScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <LoginScreen onLogin={handleLogin} />
  );
}

export default App;
