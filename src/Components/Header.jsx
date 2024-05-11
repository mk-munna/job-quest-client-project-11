import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { GrMenu } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi';
import { RiUploadCloudFill } from 'react-icons/ri';
import Login from '../Pages/Login/Login';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    // const user = {
    //     displayName: 'munna',
    //     email: '123456789',
    //     photoURL: 'https://i.ibb.co/3pCmNwH/image-removebg-preview-2.png'
    // }
    const user = false
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className='flex justify-between max-w-[1050px] mx-auto items-center px-7 mt-6'>
            <div className='flex ml-10 md:ml-[100px] lg:ml-0  items-center'>
                <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/3pCmNwH/image-removebg-preview-2.png" alt="" />
                <p className='font-medium text-heading text-xl'>JobQuest</p>
            </div>
            <div className=''>
                {
                    isOpen ? (
                        ''

                    ) : (
                            <GrMenu onClick={() => { setIsOpen(!isOpen) }} className=' duration-1000 mt-6 ml-4 lg:hidden text-4xl text-primary w-[25px] absolute top-0 left-0' />
                    )
                }

                <ul className={`z-10 lg:static absolute  duration-[0.8s] ${isOpen ? 'top-0 left-0 lg:bg-white bg-secondary h-screen lg:h-auto pl-6 py-6 pr-12 text-black' : '-left-[100%] top-0   pl-6 py-6 pr-12 h-screen md:h-screen lg:h-auto  text-black'}  `}>
                    <IoClose onClick={() => { setIsOpen(!isOpen) }} className='   text-4xl font-bold text-primary w-[25px] lg:hidden absolute top-0 right-2' />
                    <li className='flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm'>
                        <div className='flex md:hidden items-center'>
                            <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/3pCmNwH/image-removebg-preview-2.png" alt="" />
                            <p className='font-medium text-heading text-xl'>JobQuest</p>
                        </div>
                        <NavLink className={''} to={'/'}>Home</NavLink> 
                        <NavLink className={''} to={'/all-jobs'}>All Jobs</NavLink>
                        <NavLink className={''} to={'/applied-jobs'}>Applied Jobs</NavLink>
                        <NavLink className={''} to={'/add-job'}>Add A Job</NavLink>
                        <NavLink className={''} to={'/my-jobs'}>My Jobs</NavLink>

                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                {
                    loading ? (
                        <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                    ) : (
                            user ? (
                                <div className="tooltip flex items-center gap-2  tooltip-left" data-tip={user?.displayName || 'Unknown'}>
                                    <div>
                                        <div tabIndex={0} role="button" className=" m-1">
                                            {
                                                user?.photoURL ? (
                                                    <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full " />
                                                ) : (
                                                    <div className="bg-[#3bd8d8] text-lg w-8 h-8 flex justify-center items-center rounded-full">
                                                        {
                                                            user?.displayName ? (

                                                                <p>{user?.displayName.charAt(0).toUpperCase()}</p>
                                                            ) : (
                                                                <p>U</p>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                    <a>Sign out</a>
                                </div>
                            ) : (
                                    <div className='flex items-center gap-4'>
                                        <Login></Login>
                                    </div>
                            )
                    )
                }
                
                <div className=' hidden md:flex pl-10'>
                    <button className='flex items-center gap-2 bg-primary rounded-md px-4 py-2 text-sm text-white font-semibold font-Jost'><RiUploadCloudFill className='text-xl text-white'/> Upload Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Header;