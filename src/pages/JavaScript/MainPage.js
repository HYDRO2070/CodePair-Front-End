import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Navigate} from 'react-router-dom';

const MainPage = () => {
    
    const [data, setdata] = useState(null)
    const [error, seterror] = useState('')

    useEffect(() => {
        // const test = ()=>{
        //     const temp = localStorage.getItem('token');
        //     if(!temp){
        //         Navigate('/login');
        //     }
        // }
        

        const fetchdata = async()=>{
            try{
                const token = localStorage.getItem('token');
                
                const response = await axios.get('https://codepair-back-end.onrender.com/api/mainpage',{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

                setdata(response.data);
            } catch(err){
                seterror('Error etching data or unauthorized');
            }
        };
        fetchdata();

    }, [])
    
    if(error){
        return <div>{error}</div>;
    }

   

  return (
    <>
        <div>
            {data? (
                <div>
                    <h1>{data.message}</h1>
                    <p>Welcome, {data.user.email}!</p>
                </div>
            ):(
                <p>loading ......</p>
            )}
        </div>
        <div>
            Welcome to main page
        </div>
    </>
  )
}

export default MainPage