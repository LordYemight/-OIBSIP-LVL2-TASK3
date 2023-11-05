import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import '../styles/Auth.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password } = data
    try {
      const { data } = await axios.post('/register', {
        username,
        password,
        email
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('Registration successful')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // const togglePasswordVisibility = () => {
  //   setVisible(!visible);
  // };
  return (
    <div className='auth'>
      <form onSubmit={handleSubmit} className='form'>
        <label>Username</label>
        <input
          type='text'
          placeholder='enter username'
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='enter a valid email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <div>
          <input
            type={visible ? "text" : "password"}
            placeholder='enter password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {visible ? (
            <AiOutlineEye
              className="visible"
              size={20}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="visible"
              size={20}
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <button className='btn' type='submit'>Register</button>
        <span>Already have an account, Click here to {<Link to='/login'>Login</Link>}</span>
      </form>
    </div>
  )
}

export default Register