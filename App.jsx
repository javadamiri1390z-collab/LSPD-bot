import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {activePage === "Dashboard" && <Dashboard />}
        
        {activePage !== "Dashboard" && (
          <div className="coming-soon">
            <h1>{activePage}</h1>
            <p>This section is being prepared.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
