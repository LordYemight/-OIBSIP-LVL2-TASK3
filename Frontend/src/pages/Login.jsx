import React, { useState } from 'react'
import '../styles/Auth.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = data
    try {
      const { data } = await axios.post('/login', {
        username,
        password
      })
      console.log(data.error)
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('Login successful');
        navigate('/more');
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <div className='auth'>
      <form onSubmit={handleSubmit} className='form'>
        <label>Username</label>
        <input
          type='text'
          placeholder='enter your username'
          value={data.name}
          onChange={(e)=>setData({...data, username:e.target.value})}
        />
        <label>Password</label>
        <div>
          <input
            type={visible ? "text" : "password"}
            placeholder='enter your password'
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
        <button className='btn' type='submit'>Login</button>
        <span>Don't have an account, Click here to {<Link to='/register'>Register</Link>}</span>
      </form>
    </div>
  )
}

export default Login