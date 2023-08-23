import React from 'react'
import Silcon from '../asset/silicon.png'

const Certificate =({Joining_date,Name,Course_Name,Cer_id,ending_Date,college_name})=> {
    return (
        <>
            <div id='pdf_certificate' className="flex flex-col bg-white relative p-10">
                <div className="flex items-center justify-between mx-10 my-5">
                    <img className="w-[250px] h-[100px] " src='https://shoppealtech.com/images/svg/shoppeal.svg' alt="" />
                    <img className="w-[250px] h-[100px]" src={Silcon} alt="" />
                </div>
                <div className=" flex items-center justify-between mx-10 my-5">
                    <div className="flex items-center justify-between flex-col mx-10 text-s2  ">
                        <span className='font-medium  text-xl'>{Joining_date}</span>
                        <span className='font-medium text-xl'>{Name}</span>
                        <span className='font-medium  text-xl'>{Course_Name}</span>
                    </div>
                    <span className="font-medium  text-xl">
                       {Cer_id}
                    </span>
                </div>
                <span className='font-medium underline text-center  mt-6 text-3xl'>CERTIFICATE</span>
                <div className="  mx-10 text-s2 my-5 text-2xl text-start font-medium ">
                   <p> We are glad to inform you that <span className="text-[#20a0ac]">{Name } </span> from <span className="text-[#20a0ac]">{college_name}</span> has successfully completed
                    his/her internship at Shoppeal Tech from <span className="text-[#20a0ac]">{Joining_date}, to {ending_Date}</span>.

                    During this internship, he/she was exposed to the various activities of <span className="text-[#20a0ac]">Human Resource</span>.

                 We found him/her extremely inquisitive and hardworking. He/She was very much interested to learn the
                    functions of our core division and also willing to put his/her best efforts and get into the depth of
                    the subject to understand it better.</p>


                   <p> His/Her association with us was very fruitful and we wish him/her all the best in future endeavors.</p>

                 <p>   All the full and final settlements have been made from the organization’s end.</p>

                    <span className="text-[#20a0ac]">Kindly feel free to Contact Us, in case of any discrepancies.</span>




                </div>
                <div className="flex items-start justify-between flex-col mx-10 text-s2 my-10 ">
                        <span className='font-medium  text-xl'>Yours Sincerely,</span>
                        <span className='font-medium text-xl'>For Shoppeal Tech (OPC) Private Limited</span>
                       
                    </div>
                    <div className="flex items-start justify-between flex-col mx-10 text-s2 mt-12 mb-7 ">
                        <span className='font-medium  text-xl'>Sudhanshu Singh</span>
                        <span className='font-medium text-xl'>Director</span>
                       
                    </div>
                    <div className="flex items-start justify-between flex-col mx-10 text-s2 my-5  ">
                        <span className='font-medium text-[#05494fb0] text-xl'>hr@shoppeal.tech</span>
                        <span className='font-medium text-[#05494fb0] text-xl'>+91 7304663195</span>
                       
                    </div>
                    <div className="flex items-start justify-between flex-col mx-10 text-s2 mt-5  mb-10 ">
                        <span className='font-medium text-[#05494fb0] text-xl'>Shoppeal Tech (OPC) Private Limited</span>
                        <span className='font-medium text-[#05494fb0] text-xl'>Kalyan,Maharashtra India-421306</span>
                        <span className='font-medium text-[#05494fb0] text-xl'>shoppealtech.com</span>
                       
                    </div>

            </div>
       
        </>
    )
}

export default Certificate