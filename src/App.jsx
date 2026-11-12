import { useState, useEffect } from "react";

import { Routes, Route } from "react-router";
import Screen from "./screen/Screen";
import CustomerDetails from "./pages/CustomerDetails";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Customers from "./pages/Customers";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();

        setUsers(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Screen users={users} isLoading={isLoading} error={error} />}
        />
        <Route
          path="/customers"
          element={
            <Customers users={users} isLoading={isLoading} error={error} />
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
