import { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {FETCH_REQUEST, FETCH_SUCCESS,  FETCH_ERROR } from "../redux/action/actionTypes";
import { useNavigate } from "react-router";

const Register = () => {
  const [user, setUser] = useState({ userName: "", email: "", password: "", role: "" });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, isLoading, isError } = useSelector(state => state.registerData);

  console.log("Registered users:", users); // Log users from store

  //change handler
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //already have an account
  const handleClick=()=>{
    navigate('/login');
  }
  const registerUserHandler = useCallback(async (e) => {
    e.preventDefault();
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.post("https://panasonic-pioneers-062.onrender.com/user/register", user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("response data:", response.data); // Log the response data
      dispatch({ type: FETCH_SUCCESS, payload: { user: response.data.user } });
      setUser({ userName: "", email: "", password: "", role: "" });
      setError(null);
      navigate('/login')
      // alert("success :")
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: { error: error.message } });
      setError(error.message);
      // alert("success :")
    }
  }, [user, dispatch,navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-orange-200 to-white">
      <div className="flex">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">Welcome to Our Pet Family!</h2>
          <p className="text-lg text-gray-800 mb-8">
            Join us in creating a loving community for pet enthusiasts and caregivers.
          </p>
          <div className="flex justify-center mb-8">
            <img src="https://picjj.com/images/2024/06/14/W673NU.jpg" alt="Pet Image" className="w-32 h-32 object-cover rounded-full shadow-md" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">Join Pet Pal Community!</h2>
        <form onSubmit={registerUserHandler} className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">Username</label>
            <input
              type="text"
              name="userName"
              id="username"
              autoComplete="username"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
              value={user.userName}
              onChange={onChangeHandler}
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your Email"
              value={user.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={onChangeHandler}
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-900">Role</label>
            <select
              id="role"
              name="role"
              autoComplete="role-name"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={user.role}
              onChange={onChangeHandler}
            >
              <option value="">Purpose of visit</option>
              <option value="Adopter">Adopt a pet</option>
              <option value="PetCareProvider">Provide pet care service</option>
              <option value="Shelter">Animal Shelter</option>
              <option value="Customer">Pet Enthusiast</option>
              <option value="dmin">Admin</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-orange-700 bg-orange-200 hover:bg-orange-300"
            >
              Already have an account
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-orange-700 bg-orange-200 hover:bg-orange-300"
            >
              {isLoading ? 'Registering...' : 'Register User'}
            </button>
          </div>

          {isError && <div className="text-red-600 text-sm">Registration failed. Please try again.</div>}
          {error && <div className="text-red-600 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;