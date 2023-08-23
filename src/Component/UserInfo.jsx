import React, { useState } from 'react'
import { Modal } from 'antd';
const UserInfo = () => {

    const [IsDeletebtnClicked, setIsDeletebtnClicked] = useState(false);
    const [IsViewbtnClicked, setIsViewbtnClicked] = useState(false);
    const [IsCertificatebtnClicked, setIsCetificatebtnClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const HandleAction = (e) => {
        let btn = e.target.id;
        switch (btn) {
            case 'view':
                setIsViewbtnClicked(true);
                break;
            case 'delete':
                setIsDeletebtnClicked(true);
                break;
            case 'edit':
                setIsModalOpen(true);
                break;
            case 'certificate':
                setIsCetificatebtnClicked(true);
                break;

        }

    }


    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-base font-s1 bg-[#6EE5F0] text-[white] ">
                        <tr >
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Mobile No
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Joining Date
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Ending Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white font-s2   xl:text-base border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Jone deo
                            </th>
                            <td className="px-6 py-4 hidden xl:table-cell">
                                Silver@gmail.com
                            </td>
                            <td className="px-6 py-4 hidden xl:table-cell">
                                +91 7054709912
                            </td>
                            <td className="px-6 py-4 hidden xl:table-cell">
                                10/7/2023
                            </td>
                            <td className="px-6 py-4 hidden xl:table-cell">
                                10/9/2023
                            </td>

                            <td className="px-6 py-4">
                                gftyfyg$$%^&gyugig
                            </td>
                            <td onClick={HandleAction} className="px-6 py-4 text-right xl:text-xl flex items-center justify-between gap-2 ">
                                <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='view' viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                                <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='edit' viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
                                <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='delete' viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                                <svg className='w-full cursor-pointer  transform active:scale-50 transition-transform' id='certificate' viewBox="64 64 896 896" focusable="false" data-icon="folder-view" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M309.1 554.3a42.92 42.92 0 000 36.4C353.3 684 421.6 732 512.5 732s159.2-48.1 203.4-141.3c5.4-11.5 5.4-24.8.1-36.3l-.1-.1-.1-.1C671.7 461 603.4 413 512.5 413s-159.2 48.1-203.4 141.3zM512.5 477c62.1 0 107.4 30 141.1 95.5C620 638 574.6 668 512.5 668s-107.4-30-141.1-95.5c33.7-65.5 79-95.5 141.1-95.5z"></path><path d="M457 573a56 56 0 10112 0 56 56 0 10-112 0z"></path><path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path></svg>
                            </td>
                        </tr>


                    </tbody>
                </table>

            </div>
            {/* onOk={handleOk} from ke under btn par click kate model gayab */}
            <Modal className='text-2xl font-s2' title="Update User" open={isModalOpen} onCancel={handleCancel} footer={null}>

                <form className='w-full'>
                    <div className="mb-4 ">
                        <input type="text" id="name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Name' />
                    </div>
                    <div className="mb-4">
                        <input type="email" id="full-name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Email' />
                    </div>
                    <div className="mb-4">
                        <input type="tel" id="full-name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Mobile No' />
                    </div>
                    <div className="mb-4">
                        <input type="text" id="name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Joining Date' />
                    </div>
                    <div className="mb-4">
                        <input type="text" id="name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Ending Date' />
                    </div>
                    <div className="mb-4">
                        <input type="text" id="name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Course Name' />
                    </div>
                    <div className="mb-4">
                        <input type="text" id="name" name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='College Name' />
                    </div>
                    <button className="text-white mx-auto font-s1 flex justify-center text-center text-base font-medium bg-[#19A5B1] border-0 py-2 px-8 focus:outline-none hover:bg-[#3ed4e5] hover:text-[#ffffff] rounded-[5px]  md:w-[220px] md-h-[38px]  transform active:scale-50 transition-transform ">Create</button>
                </form>

            </Modal>





        </div>
    )
}

export default UserInfo