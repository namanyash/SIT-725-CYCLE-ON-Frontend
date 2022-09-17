import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <SignUp/>
    </>
  );
}

export default App;
