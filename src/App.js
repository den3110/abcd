import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import { useEffect, useState } from "react";
import getProfileApi from "./api/profile";

function App() {
  const [data, setData]= useState()
  useEffect(()=> {
    (async ()=> {
      try {
        const result= await getProfileApi()
        setData(result)
        
      } catch (error) {
        
      }
    })()
  }, [])
  return (
    <Routes>
      {routes.map((data, index) => (
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={data.path}
          element={data.component}
          key={index}
        />
      ))}
    </Routes>
  );
}

export default App;
