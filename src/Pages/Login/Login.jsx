
import React from 'react';

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineUser } from 'react-icons/hi';
const Login = () => {
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }
    return (
        <div>
            <>
                <button className='bg-white flex gap-3 hover:bg-white text-heading hover:underline cursor-pointer' onClick={() => setOpenModal(true)}><HiOutlineUser className='text-xl' /> Sign in</button>
                <Modal show={openModal} className='bg-secondary' size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="">
                            <h3 className="text-3xl text-center font-medium text-gray-900 dark:text-white ">LOGIN</h3>
                            <input className='block text-center my-[20px] mx-auto  w-[250px] py-[14px] px-[10px] focus:outline-none border-primary  rounded-3xl placeholder:text-Description border  duration-200 focus:w-[300px] ' type="text" name="" id="" placeholder='User Email ' />
                            <input className='border-primary focus:outline-none block text-center my-[20px] mx-auto  w-[250px] py-[14px] px-[10px]  rounded-3xl placeholder:text-Description border  duration-200 focus:w-[300px] ' type="text" name="" id="" placeholder='User Password' />
                            <input
                                className="block text-center my-[20px] mx-auto  bg-gradient-to-r from-[#28f0a6] to-[#1CA774] w-[250px]  py-[14px] px-[10px] outline-none active:scale-95 text-white rounded-3xl duration-200 hover:w-[251px] cursor-pointer"
                                type="button" value="LOGIN"/>
                                <p className="text-center dark:text-white text-sm">Don't have an account?</p>
                            <div className='flex justify-center'>
                                <a className="dark:text-white font-semibold  text-primary text-sm underline" href="#">Sign up</a>
                                </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    );
};

export default Login;