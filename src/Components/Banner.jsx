import React from 'react';
import { IoIosSearch, IoMdCheckmark } from 'react-icons/io';
import { IoBagRemoveSharp } from 'react-icons/io5';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <section className="py-10 lg:max-w-[1050px] mx-auto sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className=''>
                            <p className='bg-secondary font-semibold py-1 rounded-md text-primary inline px-4'>
                                <span className='text-sm text-primary'>------</span> Get Your Job Here</p>
                            <h1 className="text-4xl mt-8 font-bold text-heading sm:text-6xl lg:text-[52px]">
                                Find The Job That Fix&nbsp;
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#a8ffde]"></span>
                                    <h1 className="relative text-4xl font-bold text-heading sm:text-6xl lg:text-[60px]">Your Life.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base text-Description sm:text-xl">Getting a new job is never easy. Check what new jobs we have in store for you on Job Stock..</p>

                            <div className="mt-10 flex gap-6 md:gap-40 ">
                                <div>
                                    <p className='flex gap-2 text-sm  font-semibold text-Description items-center'><span className='bg-secondary text-primary p-2 rounded-full'><IoMdCheckmark /></span>5 Job Posted</p>
                                    <p className='mt-6 flex gap-2 text-sm  font-semibold text-Description items-center'><span className='bg-secondary text-primary p-2 rounded-full'><IoMdCheckmark /></span>10 Featured Jobs</p>
                                </div>
                                <div>
                                    <p className='flex gap-2 text-sm  font-semibold text-Description items-center'><span className='bg-secondary text-primary p-2 rounded-full'><IoMdCheckmark /></span>5 Job Posted</p>
                                    <p className='mt-6 flex gap-2 text-sm  font-semibold text-Description items-center'><span className='bg-secondary text-primary p-2 rounded-full'><IoMdCheckmark /></span>10 Featured Jobs</p>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <form className='border rounded-md py-4 px-4  flex-col md:flex-row flex md:justify-evenly lg:justify-normal gap-4  lg:w-[550px]'>
                                    <div className='flex gap-2 items-center'>
                                        <IoIosSearch />
                                        <input className='outline-none border-none focus:outline-none' type="text" placeholder='Web Developer, Keyword' />
                                    </div>
                                    <div className='flex gap-2 items-center border-t md:border-t-0 pt-4 md:pt-0 md:border-l md:pl-4'>
                                        <IoBagRemoveSharp className='text-gray-600' />
                                        <select className='px-2 focus:outline-none focus:text-primary' name="" id="">
                                            <option className='bg-secondary text-black' value="">Web Development</option>
                                            <option className='bg-secondary text-black' value="">UX/UI Design</option>
                                            <option className='bg-secondary text-black' value="">Project Management</option>
                                            <option className='bg-secondary text-black' value="">Customer Service</option>
                                            <option className='bg-secondary text-black' value="">Marketing</option>
                                        </select>
                                    </div>
                                    <button className='bg-primary px-3 rounded-md py-3 text-white'>Find Job</button>
                                </form>
                            </div>
                        </div>

                        <div className=' gap-4 flex justify-end'>
                            <div>
                                <img className=' rounded-full lg:h-[180px] h-auto' src="https://i.ibb.co/CVNdPcm/bn-4.webp" alt="" />
                                <img className='rounded-3xl mt-4 lg:h-[280px] h-auto' src="https://i.ibb.co/19fVfDv/bns-1.webp" alt="" />
                            </div>
                            <div>
                                <img className='rounded-3xl lg:h-[280px] h-auto' src="https://i.ibb.co/SRYsyRL/bn-2.webp" alt="" />
                                <img className='rounded-full h-auto  lg:h-[180px] mt-4' src="https://i.ibb.co/VqWZhbz/bn-3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;