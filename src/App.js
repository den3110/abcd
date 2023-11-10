import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import mock from "./mockapi/mock";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState();
  useEffect(() => {
    isAuthenticated();
  }, []);
  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken"); // Lấy token từ local storage hoặc context state
    if (token) {
      // Kiểm tra xem token có hợp lệ hay không
      try {
        // Token hợp lệ, người dùng đã đăng nhập
        if (window.location.pathname.includes("login")) {
          window.location.href = window.location.origin;
        }
        setAuthenticate(true);

        return true;
      } catch (error) {
        // Token không hợp lệ, xử lý lỗi nếu cần
        // Ví dụ: Xóa token từ local storage hoặc context state để đảm bảo người dùng phải đăng nhập lại
        localStorage.removeItem("token");
        setAuthenticate(false);
        if (!window.location.pathname.includes("login")) {
          window.location.href = window.location.origin + "/login";
        }
        // window.location.href= window.location.origin + "/login"
        return false;
      }
    } else {
      // Không có token, người dùng chưa đăng nhập
      setAuthenticate(false);
      if (!window.location.pathname.includes("login")) {
        window.location.href = window.location.origin + "/login";
      }
      //   window.location.href= window.location.origin + "/login"
      return false;
    }
  };

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
