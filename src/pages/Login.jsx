import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useTranslation } from "react-i18next";
// import { generateMockToken } from "../mockapi/fakejwt";
const Login = () => {
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();
  const {t }= useTranslation()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res= await axios({
        url: "https://dovio.net/api/auth/auth/token",
        method: "post",
        data: {
          client_id: "dovio.net",
          grant_type: "password",
          email: account,
          password: password,
          captcha: "string",
          captcha_geetest: {
            captcha_output: "",
            gen_time: "",
            lot_number: "",
            pass_token: "",
          },
        },
      });
      const result= await res.data
      if(result.ok=== true) {
        localStorage.setItem("accessToken", result.d.access_token)
        localStorage.setItem("refreshToken", result.d.refresh_token)
        window.location.reload()
      }
      else {
        alert(result.m)
      }
      console.log(result)
    } catch (error) {
      console.log(error.response)
      
    }
    // Sử dụng axios như bạn đã làm bình thường trong ứng dụng của bạn
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
                <h1 className="heading text-center">{t("login")}</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li>
                    <Link to="#">{t("pages")}</Link>
                  </li>
                  <li>{t("login")}</li>
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
                {t("login_header")}
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
                  <h5>{t("login_header_2")}</h5>
                </div>

                <div className="form-inner">
                  <form onSubmit={handleLogin} action="#" id="contactform">
                    <input
                      id="email"
                      name="email"
                      tabIndex="1"
                      aria-required="true"
                      type="text"
                      placeholder={t("placeholder_email")}
                      required
                      value={account}
                      onChange={(e) => setAccount(e.target.value)}
                    />
                    <input
                      id="password"
                      name="password"
                      tabIndex="2"
                      aria-required="true"
                      required
                      type="password"
                      placeholder={t("placeholder_password")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="row-form style-1">
                      <label>
                        {t("remember_me")}
                        <input type="checkbox" />
                        <span className="btn-checkbox"></span>
                      </label>
                      <Link to="#" className="forgot-pass">
                        {t("forgot_password")} ?
                      </Link>
                    </div>

                    <button className="submit">{t("login")}</button>
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
