// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to',
          home: "Home",
          account_connect: "Account connect",
          login_header: "Login To Points Store",
          login_header_2: "Login with email",
          placeholder_email: "Your Email Address",
          placeholder_password: "Your Password Address",
          remember_me: "Remember me",
          forgot_password: "Forgot Password",
          login: "Login",
          pages: "Pages",
          Home: "Home",
          owning: "Owning",
          "Welcome to": "Welcome To",
          "Trade a lot to get more points (1000 trading volume = 1000 points)": "Trade a lot to get more points (1000 trading volume = 1000 points)",
          explore_more: "Explore More",
          en: "English",
          vi: "Vietnamese",
          // Add more English translations as needed
        },
      },
      vi: {
        translation: {
          welcome: 'Chào mừng bạn đến với',
          home: "Trang chủ",
          account_connect: "Kết nối tài khoản",
          login_header: "Đăng Nhập Vào Hệ Thống",
          login_header_2: "Đăng nhập bằng gmail",
          placeholder_email: "Tài khoản email của bạn",
          placeholder_password: "Mật khẩu của bạn",
          remember_me: "Nhớ mật khẩu",
          forgot_password: "Quên mật khẩu",
          login: "Đăng nhập",
          pages: "Trang",
          Home: "Trang chủ",
          owning: "Người bán",
          "Welcome to": "Chào mừng bạn đến với",
          "Trade a lot to get more points (1000 trading volume = 1000 points)": "Giao dịch nhiều để nhận được nhiều điểm hơn (1000 khối lượng giao dịch = 1000 điểm)",
          explore_more: "Khám phá thêm",
          en: "Tiếng Anh",
          vi: "Tiếng Việt",

          // Add more Vietnamese translations as needed
        },
      },
      // Add more languages and translations as needed
    },
    lng: localStorage.getItem("lang") || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  export const setLanguageToLocalStorage = (lng) => {
    localStorage.setItem("lang", lng);
  };

export default i18n;
