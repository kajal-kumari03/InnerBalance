// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './forgotPassword.css';
// import { EmailContext } from '../contexApi/EmailPRovider';

// const PasswordReset = () => {
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State for loading animation
//   const { email } = useContext(EmailContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true); // Set loading state

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       setIsLoading(false); // Reset loading state
//       return;
//     }

//     try {
//       const response = await fetch('https://panasonic-pioneers-062.onrender.com/user/resetPassword', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, newPassword }),
//       });

//       const data = await response.json();
//       setIsLoading(false); // Reset loading state after API call

//       if (response.status === 200) {
//         alert(data.message); // Optionally, show a success message
//         navigate('/login'); // Redirect to login page after successful password reset
//       } else {
//         setError(data.message || 'Failed to reset password');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       setIsLoading(false); // Reset loading state on error
//     }
//   };

//   return (
//     <div className='forgot-main'>
//     <div className="reset-password">
//       <h2 className="reset-password-title">Reset Password</h2>
//       <form className="reset-password-form" onSubmit={handleSubmit}>
//         <label className="reset-password-label">
//           New Password:
//           <input
//             className="reset-password-input"
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             minLength="6"
//             required
//           />
//         </label>
//         <label className="reset-password-label">
//           Confirm Password:
//           <input
//             className="reset-password-input"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             minLength="6"
//             required
//           />
//         </label>
//         {error && <p className="reset-password-error">{error}</p>}
//         <button className="reset-password-button" type="submit" disabled={isLoading}>
//         {isLoading ? <div className="loading-spinner"></div> : 'Reset Password'}
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default PasswordReset;