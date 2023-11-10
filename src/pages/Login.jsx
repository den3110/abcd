import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";
import mock from "../mockapi/mock";

// import { generateMockToken } from "../mockapi/fakejwt";
const Login = () => {

  const [account, setAccount]= useState()
  const [password, setPassword]= useState()
  const handleLogin = (e) => {
    e.preventDefault()
    // Sử dụng axios như bạn đã làm bình thường trong ứng dụng của bạn
    axios
      .post("/api/login", {
        account,
        password,
      })
      .then((response) => {
        if(response.data.ok=== true) {
            localStorage.setItem("accessToken", response.data.token)
            window.location.reload()
        }
        console.log(response.data.token); // Xử lý khi yêu cầu thành công (mã trạng thái 200)
      })
      .catch((error) => {
        if (error.response) {
            console.log(error)
          // Nếu có phản hồi từ server, kiểm tra mã trạng thái trong đối tượng error.response
          console.log("Status code:", error.response.status);
          console.log("Error data:", error.response.data); // Dữ liệu lỗi từ server
        } else {
          // Nếu không có phản hồi từ server (ví dụ: lỗi mạng), xử lý lỗi ở đây
          console.error("Network error:", error.message);
        }
      });
  };
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Login</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-login tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">
                Login To Points Store
              </h2>
              {/* 
                            <div className="flat-form box-login-social">
                                <div className="box-title-login">
                                    <h5>Login with social</h5>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-google-2"></i>
                                            <span>Google</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-facebook"></i>
                                            <span>Facebook</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}

              <div className="flat-form box-login-email">
                <div className="box-title-login">
                  {/* <h5>Or login with email</h5> */}
                  <h5>Login with email</h5>
                </div>

                <div className="form-inner">
                  <form onSubmit={handleLogin} action="#" id="contactform">
                    <input
                      id="email"
                      name="email"
                      tabIndex="1"
                      aria-required="true"
                      type="text"
                      placeholder="Your Email Address"
                      required
                      value={account}
                      onChange={(e)=> setAccount(e.target.value)}
                    />
                    <input
                      id="password"
                      name="password"
                      tabIndex="2"
                      aria-required="true"
                      required
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                    />

                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox"></span>
                      </label>
                      <Link to="#" className="forgot-pass">
                        Forgot Password ?
                      </Link>
                    </div>

                    <button className="submit">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
