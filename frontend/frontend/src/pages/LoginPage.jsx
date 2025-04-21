



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password || !formData.role) {
//       setError('Registration failed. Please try again.');
//     } else {
//       setError('');
//       alert('Registered successfully!');
//       // TODO: Add registration API logic here
//     }
//   };

//   const handleAlreadyHaveAccount = () => {
//     navigate('/loginform'); // Redirects to the SignIn page
//   };

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <h2>Welcome to Our Pet Family!</h2>
//         <p>
//           Join us in creating a loving community for pet enthusiasts and caregivers.
//         </p>
//         <div className="pet-image">Pet Image</div>
//       </div>

//       <div className="right-panel">
//         <h2>Join Pet Pal Community!</h2>
//         <form className="form" onSubmit={handleRegister}>
//           <label>Username</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />

//           <label>Email address</label>
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <label>Role</label>
//           <select name="role" value={formData.role} onChange={handleChange}>
//             <option value="">Purpose of visit</option>
//             <option value="client">Client</option>
//             <option value="professor">Professor</option>
//             <option value="admin">Admin</option>
//           </select>

//           <div className="button-group">
//             <button type="button" className="btn-secondary" onClick={handleAlreadyHaveAccount}>
//               Already have an account
//             </button>
//             <button type="submit" className="btn-primary">
//               Register User
//             </button>
//           </div>

//           {error && <p className="error-text">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.role) {
      setError('Please fill all the fields!');
    } else {
      setError('');
      alert('Registered successfully!');
    }
  };

  const handleAlreadyHaveAccount = () => {
    navigate('/loginform');
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2 className="form-title">Join the Pet Pal Community 🐾</h2>
        <p className="form-subtitle">Create an account to connect with pet lovers</p>

        <form onSubmit={handleRegister} className="form-content">
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Choose your role</option>
            <option value="client">Client</option>
            <option value="professor">Professor</option>
            <option value="admin">Admin</option>
          </select>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="btn-primary">Sign Up</button>
          <button type="button" className="btn-link" onClick={handleAlreadyHaveAccount}>
            Already have an account? Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
