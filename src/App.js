import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, ProtectedRoutes } from "./components";
import { LandingPage, Wallet, HomePage, RideHistory } from "./pages";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/previousRides" element={<RideHistory />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
