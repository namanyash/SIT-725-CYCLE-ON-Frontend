import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AUTH_REDUCER,
  HOME_ROUTE,
  LANDING_ROUTE,
  parseJwt,
  WALLET_ROUTE,
} from "../utils";
import { Footer, Header, ProtectedRoutes } from "./components";
import { LandingPage, Wallet, HomePage } from "./pages";
import { isLoggedIn } from "./redux/slices/authSlice";
import { getUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state[AUTH_REDUCER]);

  const checkTokenExpiration = () => {
    // To check if token is expired or not and dispatch auth state
    const token =
      JSON.parse(localStorage.getItem("token")) &&
      JSON.parse(localStorage.getItem("token"));
    if (token) {
      if (parseJwt(token).exp < Date.now() / 1000) {
        localStorage.clear();
        dispatch(isLoggedIn(false));
      } else dispatch(isLoggedIn(true));
    } else dispatch(isLoggedIn(false));
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  useEffect(() => {
    if (isAuth) dispatch(getUser()); // if loggedIn then make getUser API request via redux saga
  }, [isAuth]);

  return (
    isAuth !== null && (
      <Router>
        <Header />
        <Routes>
          <Route path={LANDING_ROUTE} element={<LandingPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={WALLET_ROUTE} element={<Wallet />} />
            <Route path={HOME_ROUTE} element={<HomePage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    )
  );
}

export default App;
