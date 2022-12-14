import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AUTH_REDUCER,
  HOME_ROUTE,
  LANDING_ROUTE,
  parseJwt,
  PREV_RIDES_ROUTE,
  WALLET_ROUTE,
} from "../utils";
import { Alerts, Footer, Header, Loader, ProtectedRoutes } from "./components";
import { LandingPage, Wallet, HomePage, RideHistory } from "./pages";
import { errorAlert } from "./redux/slices/alertSlice";
import { isLoggedIn } from "./redux/slices/authSlice";
import { setLoader } from "./redux/slices/loaderSlice";
import { getUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state[AUTH_REDUCER]);

  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers["X-Auth-Token"] = localStorage.getItem("token");

      dispatch(setLoader(true));

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      dispatch(setLoader(false));

      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      if (error.response.status === 500)
        dispatch(errorAlert({ msg: "Internal Server Error" }));
      else dispatch(errorAlert({ msg: error.response.data.errors[0].msg }));

      dispatch(setLoader(false));

      return Promise.reject(error);
    }
  );

  const checkTokenExpiration = () => {
    // To check if token is expired or not and dispatch auth state
    const token =
      localStorage.getItem("token") && localStorage.getItem("token");
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
      <>
        <Alerts />
        <Loader />
        <Router>
          <Header />
          <Routes>
            <Route path={LANDING_ROUTE} element={<LandingPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path={WALLET_ROUTE} element={<Wallet />} />
              <Route path={HOME_ROUTE} element={<HomePage />} />
              <Route path={PREV_RIDES_ROUTE} element={<RideHistory />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  );
}

export default App;
