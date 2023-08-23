import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginGoogle from '../../Component/LoginGoogle';


const SignUp = () => {
  const navigate = useNavigate();

  const [Input,setInput]=useState({name:'',email:'',password:'',otp:'',phone:''});
 
const HandleChange=(e)=>{
 let  {name,value}=e.target;
 setInput({...Input,[name]:value});
}






  return (
   <div className='flex items-center justify-center' >
   <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center md:w-[1040px] md:h-[592px]">
    <div className="lg:w-3/5  md:pr-16 lg:pr-0 pr-0 md:w-[520px] bg-[#108C97] rounded-[5px]   md:h-[592px] md:flex md:items-center md:justify-center md:flex-col md:flex-1">
      <h1 className="font-s1  font-[700] text-[white] text-3xl md-text-[32px] px-10 ">Shoppeal</h1>
      <p className="leading-relaxed mt-4 text-[#FFFFFF9E] text-center px-10  text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo a, doloremque ducimus quis laboriosam pariatur eius deserunt reiciendis iste.</p>
    </div>

    <div className="lg:w-2/6  bg-[#E4F7F9]  rounded-[5px] -lg p-8 flex flex-col md:px-10 py-10 w-full mt-1 md:mt-0 md:w-[520px] md:h-[592px]  md:flex-1">
      <h2 className="text-lg font-medium title-font mb-5 text-[#000] md:text-[32px] ">Sign Up</h2>
      <div className="relative mb-4">
        <input onChange={HandleChange}  type="text" id="full-name" name="name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Username' value={Input.name}/>
      </div>

      <div className="relative mb-4 flex gap-7">
  
       <input onChange={HandleChange}  type="text"  name="phone" className="w-1/2 font-s2 flex-1 bg-white rounded-[5px] -[5px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Phone No'value={Input.phone} />
         <button  className='absolute text-[8px] rounded-[5px] -[5px] font-s1 font-semibold border-none end-[40%] text-[#0A5E66] md:end-[33%] bottom-[30%]  transform active:scale-75 transition-transform'>Generate OTP</button>
        
     

        <input  onChange={HandleChange}  type="text"  name="otp" className=" rounded-[5px] -[5px] w-1/4 flex-none bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='OTP' value={Input.otp} />
        <button className='absolute text-[8px] rounded-[5px] -[5px] font-s1 font-semibold border-none end-[1%] text-[#0A5E66]  bottom-[30%]  transform active:scale-75 transition-transform'>Verify OTP</button>
    
      </div>
      <div className="relative mb-4">
        <input onChange={HandleChange} type="email" id="email" name="email" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Email' value={Input.email}/>
      </div>
      <div className="relative mb-4">
        <input onChange={HandleChange}  type="password" id="password" name="password" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Password' value={Input.password}/>
      </div>
      <div className="relative mb-6 flex items-center justify-center flex-col">
      <button className="text-white mx-auto font-s1 text-base font-medium bg-[#19A5B1] border-0 py-2 px-8 focus:outline-none hover:bg-[#3ed4e5] hover:text-[#ffffff] rounded-[5px]  md:w-[129px] md-h-[38px]  transform active:scale-50 transition-transform ">Sign Up</button>
      <p className='my-4'>OR</p>

    {/* Sign Up with google */}
      <LoginGoogle/>
      </div>
      <p className="text-xs font-medium text-[#535353] font-s2 text-center mt-1">Already a member? <Link to={'/login'} className='font-semibold text-[#F07319]'>Sign In</Link></p>
    </div>
  </div>
 
</section>
   </div>
  )
}

export default SignUp




