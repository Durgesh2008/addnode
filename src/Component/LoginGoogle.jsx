import React from 'react'
import GoogleLogin from 'react-google-login';
const LoginGoogle = () => {
    
const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <GoogleLogin
    clientId="1055619088983-iqidjotfg1lfknvb39gc0564mqhvp8m1.apps.googleusercontent.com"
    onSuccess={responseGoogle}
    isSignedIn={true}
    className="flex text-xl my-4 items-center justify-center rounded cursor-pointer text-[#8B9899] w-full p-4 pl-10  font-s2 font-medium  border border-gray-300  -lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
  />
  )
}

export default LoginGoogle