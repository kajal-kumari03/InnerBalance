


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Logged in successfully!');
//     // TODO: Add actual login logic
//   };

//   return (
//     <div className="login-container">
//       <div className="login-right">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2>Welcome Back</h2>

//           <input
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button type="submit" className="login-btn">Login</button>

//           <div className="forgot-password">
//             <Link to="/forgot-password">Forgot password?</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // for navigation after login

  // Sample roles - you can replace this logic with an API call
  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'prof@example.com', password: 'prof123', role: 'professor' },
    { email: 'client@example.com', password: 'client123', role: 'client' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find user by email
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
    
    if (user) {
      alert('Logged in successfully!');
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin-dashboard'); // Redirect to Admin Dashboard
      } else if (user.role === 'professor') {
        navigate('/professor-dashboard'); // Redirect to Professor Dashboard
      } else if (user.role === 'client') {
        navigate('/client-dashboard'); // Redirect to Client Dashboard
      }
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>

          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">Login</button>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
