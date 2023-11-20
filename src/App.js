import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./pages/index";
import { useEffect, useState } from "react";
import getProfileApi from "./api/profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import './i18n';

function App() {
  const [auth, setAuth] = useState();
  const [data, setData] = useState();
  const token= localStorage.getItem("accessToken")
  const refreshToken= localStorage.getItem("refreshToken")
  const checkValidToken = (tokenExpire) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // So sánh và kiểm tra
    if (tokenExpire > currentTimestamp) {
      return true;
    } else if (tokenExpire === currentTimestamp) {
      return true;
    } else {
      return true;
    }
  };

  useEffect(() => {
    (async () => {
      if (checkValidToken(token)) {
        try {
          const result = await getProfileApi();
          setData(result);
          if (result.ok === true) {
            setAuth(true);
          }
        } catch (error) {
          setAuth(false);
        }
      } else {
        if (checkValidToken(refreshToken)) {
          try {
            const result = await getProfileApi();
            setData(result);
            if (result.ok === true) {
              setAuth(true);
            }
          } catch (error) {
            setAuth(false);
          }
        } else {
          setAuth(false);
        }
      }
    })();
  }, []);

  return (
    <Routes>
      {auth === false && (
        <>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
      {auth === true && (
        <>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/sign-up" element={<Navigate to="/" replace />} />
          {routes.map((data, index) => (
            <Route
              onUpdate={() => window.scrollTo(0, 0)}
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
            />
          ))}
          
        </>
      )}
    </Routes>
  );
}

export default App;
