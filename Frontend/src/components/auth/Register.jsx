import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

  var[firstName,setfirstName] = useState("")
  var[lastName,setlastName] = useState("")
  var [email,setemail] = useState("")
  var [password , setpass] = useState("")
  var navigate = useNavigate();

  const handlesubmit = async(e) =>
  {
    var data ={firstName, lastName ,email,password}
    console.log(data)
    e.preventDefault();

    try{
      var res = await axios.post("http://localhost:5001/user",data)
      if(res.status === 200)
      {
        alert("Regster successfully")
        navigate('/')
      }
      else{
        alert("register Failed")
      }
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
    <>
    <div className='bg-white p-14 '>
    <form>
      
        <div >
        <label for='firstName'className='text-red-600 text-xl'>FirstName</label>
        <input type='text' onChange={(e) => {setfirstName(e.target.value)}} className='pl-1 border border-cyan-950'/>
        </div>
        <div >
        <label for="lastName" className='text-red-600 text-xl'>LastName</label>
        <input type="text" onChange={(e) => {setlastName(e.target.value)}} className='pl-1 border border-cyan-950'></input>
        </div>

        <div >
        <label for="email" className='text-red-600 text-xl'>Email</label>
        <input type='email'  onChange={(e) => {setemail(e.target.value)}} className='pl-1 border border-cyan-950'></input>
        </div>
        <div >
        <label for="password" className='text-red-600 text-xl'>Password</label>
        <input type='password' onChange={(e) => {setpass(e.target.value)}} className='pl-1 border border-cyan-950'></input>
        </div>


        <button onClick={handlesubmit} className='p-1 border-4 mb-16 mt-7 text-white bg-black'>submit</button>
        <a href="/" className='p-1 border-4 mb-16 mt-7 text-white bg-black'>LOGIN</a>
    </form>
    </div>
    </>
  )
}
