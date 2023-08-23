import React from 'react'
import { Col, Row } from 'antd';
import Image from '../asset/profile.png'
import {UserOutlined}  from '@ant-design/icons'
const UserProfile = () => {
    return (
        <div className='w-full flex items-center justify-center'>

            <div className=" bg-white border h-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-3/4 py-12 px-4 mx-1 my-1">


                <Row className='p-3'>
                    <Col flex={2} className='flex flex-col items-center justify-center'>
                    <img class="w-[100px] h-[100px] md:w-[200px] md:h-[200px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={Image} alt="Bordered avatar"/>
                    <p className='  text-base md:text-xl mt-3'>
                          
                            <span className='font-s2 text-[#000000]  '> Jone Deo</span>
                        </p>
                        <p className='  text-base md:text-xl '>
                          
                            <span className='font-s2 text-[#000000] text-[16px]  '> Student</span>
                        </p>
                    </Col>
                    <Col flex={3} className='flex flex-col md:items-start md:justify-center items-center justify-center'>
                        <span className='font-s1 text-xl text-[#000000] font-semibold'>Information</span>
                        <hr className='my-2 font-blod text-[#000000] ' />
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Name:</span>
                            <span className='font-s2 text-[#00000087]   '> Jone Deo</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Email:</span>
                            <span className='font-s2 text-[#00000087]   '> jone123@gmail.com</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Mobile No:</span>
                            <span className='font-s2 text-[#00000087]   '> +91 8943123465</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-centerfont-medium'>Joining Date:</span>
                            <span className='font-s2 text-[#00000087]   '> 10/7/2023</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Ending Date:</span>
                            <span className='font-s2 text-[#00000087]   '> 10/10/2023</span>
                        </p>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default UserProfile