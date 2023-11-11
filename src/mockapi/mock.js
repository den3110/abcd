import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

// Mock một yêu cầu POST đến /api/login với mã trạng thái 200
// Mock một yêu cầu POST đến /api/login với mã trạng thái được lưu trong biến statusCode
let statusCode = 200; 

let isLoggedIn = true; // Biến để theo dõi trạng thái đăng nhập

// Mock một yêu cầu GET đến /api/user để kiểm tra trạng thái đăng nhập
mock.onGet('/api/user').reply(() => {
  if (isLoggedIn) {
    return [200, {
      userId: 1,
      username: 'user123',
    }];
  } else {
    return [401, {
      error: 'Unauthorized',
    }];
  }
});


mock.onPost('/api/login').reply(config => {
    return [statusCode, {
      token: 'mocked-jwt-token',
      userId: 1,
      username: 'user123',
      ok: true,
    }];
  });
  
  // Sử dụng axios để gửi yêu cầu đăng nhập và xử lý phản hồi
  axios.post('/api/login', {
    username: 'user123',
    password: 'password123',
  })
    .then(response => {
      console.log('Login successful!');
      console.log('Token:', response.data.token);
      console.log('User ID:', response.data.userId);
      console.log('Username:', response.data.username);
    })
    .catch(error => {
      console.error('Login failed with status code:', error.response.status);
    });
  
  // Đặt statusCode thành 400 để mock một yêu cầu đăng nhập không thành công
  statusCode = 400;
  
  axios.post('/api/login', {
    username: 'user123',
    password: 'wrongpassword',
  })
    .then(response => {
      console.log('Login successful!');
      console.log('Token:', response.data.token);
      console.log('User ID:', response.data.userId);
      console.log('Username:', response.data.username);
    })
    .catch(error => {
      console.error('Login failed with status code:', error.response.status);
    });
  
  // Đặt statusCode thành 401 để mock một yêu cầu đăng nhập không thành công với mã trạng thái 401
  statusCode = 200;
  
  axios.post('/api/login', {
    username: 'user123',
    password: 'wrongpassword',
  })
    .then(response => {
      console.log('Login successful!');
      console.log('Token:', response.data.token);
      console.log('User ID:', response.data.userId);
      console.log('Username:', response.data.username);
    })
    .catch(error => {
      console.error('Login failed with status code:', error.response.status);
    });
  

