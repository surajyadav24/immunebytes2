import jwtDecode from 'jwt-decode';

const checkTokenExpiry = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('accessToken');
      window.location.href = "/dashboard"; // Redirect to login
    }
  }
};

checkTokenExpiry(); // Call on page load
