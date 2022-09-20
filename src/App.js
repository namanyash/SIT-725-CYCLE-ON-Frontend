import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, ProtectedRoutes } from "./components";
import { LandingPage, Wallet } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/wallet" element={<Wallet />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
