import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate,Link} from 'react-router-dom';
import "../CSS/SigninPage.css"
import axios from 'axios';

const SigninPage = () => {

      const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: {errors,isSubmitting},
    } = useForm();

    const password = watch('password','')
    const navigate = useNavigate();
    const onsubmit = async(data)=>{
      // backend work here
      try{
        const response = await axios.post('https://codepair-back-end.onrender.com/api/signup',data);
        console.log('User signed Up : ',response.data);
        navigate('/login');
      } catch(error){
        console.log('Error during sign up: ',error.response.data);
      }
    }

  return (
    <>
        <div className="sign-in-from">
            <div className="sign-from">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" placeholder='Username'{...register('username',{required : {value:true,message:"Username is require"},minLength:{value:6,message:"invalid username"}})} />
                {errors.username && <p className='error-message'>* {errors.username.message}</p>}
                <br />
                <input type="email" placeholder='Email' {...register('email',{required:{value:true,message:"Email is require"},pattern:{value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"Invalid email formate"}
                })} />
                {errors.email && <p className='error-message'>* {errors.email.message}</p>}
                <br />
                <input type="password" placeholder='Password'{...register('password',{required : {value:true,message:"Password is require"},minLength:{value:8,message:"too short password"}})} />
                {errors.password && <p className='error-message'>* {errors.password.message}</p>}
                <br />
                <input type="password" placeholder='Confirm Password'{...register('confirmpassword',{validate: (value)=>value === password || 'Password do not match'})} />
                {errors.confirmpassword && <p className='error-message'>* {errors.confirmpassword.message}</p>}
                <br />
                <div className="check-box">
                    <input type="checkbox" name="check" id="check" />
                    <p>I accept the terms of Use & Privacy Policy</p>
                </div>
                <button type="submit">Sing Up</button>
            </form>
            <div className="form-bottom">
                <div className="form-log">
                    <p>Already have an account?</p>
                    <Link to="/login">Login here</Link>
                </div>
                <p>Copyright © CodePair.om</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default SigninPage