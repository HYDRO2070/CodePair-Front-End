import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate,Link} from 'react-router-dom';
import "../CSS/LoginPage.css"
import axios from 'axios';

const LoginPage = ({ onLogin }) => {

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: {errors,isSubmitting},
    } = useForm();

    
    const navigate = useNavigate();
    const onsubmit = async(data)=>{
        /// backend work here
        console.log(data)
      try{
        const response = await axios.post('https://codepair-back-end.onrender.com/api/login',data);
        localStorage.setItem('token',response.data.token);
        onLogin(response.data.token)
        console.log('User signed Up : ',response.data);
        navigate('/');
      } catch(error){
        console.log('Error during sign up: ',error.response.data);
      }
        
    }

  return (
    <>
        <div className="log-in-from">
            <div className="log-from">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="email" placeholder='Email' {...register('email',{required:{value:true,message:"Email is require"},pattern:{value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"Invalid email formate"}
                })} />
                {errors.email && <p className='error-message'>* {errors.email.message}</p>}
                <br />
                <input type="password" placeholder='Password'{...register('password',{required : {value:true,message:"Password is require"}})} />
                {errors.password && <p className='error-message'>* {errors.password.message}</p>}
                <br />
                <button type="submit">Log in</button>
            </form>
            <div className="log-bottom">
                <div className="log-log">
                    <p>Don't have an account?</p>
                    <Link to="/signin">SignUp here</Link>
                </div>
                <p>Copyright c CodePair.om</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default LoginPage