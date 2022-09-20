import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Wallet from "./pages/Wallet";
import LogIn from "./pages/LogIn";

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <LogIn />
    </>
  );
}

export default App;
