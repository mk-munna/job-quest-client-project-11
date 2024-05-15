import React from 'react';
import { CiDiscount1 } from 'react-icons/ci';
import { FaUserPlus } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { LuUserPlus2 } from 'react-icons/lu';
import { TfiReload } from 'react-icons/tfi';
import { motion } from "framer-motion";

const GetJobSection = () => {
    return (
        <div className="max-w-[90%] mx-auto py-12">
            <div className='flex flex-col lg:flex-row '>
                <div className='relative lg:w-[600px]'>
                    <img width={'90%'} src="https://i.ibb.co/fkQMFp4/thumb-review-6ac97f60f429ebe01523.png" alt="" />
                    {/* Animated div */}
                    <motion.div
                        className='w-[200px] font-Montserrat bg-white top-10 dark:bg-[#2c4139] shadow-xl absolute p-4 rounded-lg'
                        initial={{ opacity: 1, y: -10, x: 50 }}
                        animate={{ opacity: 1, y: -10, x: -50 }}
                        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
                        
                    >
                        <p className='flex gap-2 items-center text-xl font-semibold'><CiDiscount1 className='text-2xl text-primary' />198+</p>
                        <p className='text-gray-600 text-sm dark:text-Description2 pl-8'>Countries</p>
                    </motion.div>
                    {/* Animated div */}
                    <motion.div
                        className='w-[200px] font-Montserrat bg-white bottom-10 dark:bg-[#2c4139] shadow-xl absolute p-4 rounded-lg'
                        initial={{ opacity: 1, y: 20, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 20 }}
                        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <p className='flex gap-2 items-center text-xl font-semibold'><LuUserPlus2 className='text-2xl text-primary' />1 million+</p>
                        <p className='text-gray-600 text-sm dark:text-Description2 pl-8'>Users</p>
                    </motion.div>
                    {/* Animated div */}
                    <motion.div
                        className='w-[220px] font-Montserrat bg-white top-[40%] right-0 dark:bg-[#2c4139] shadow-xl absolute p-4 rounded-lg'
                        initial={{ opacity: 1, y: -20, x: -10 }}
                        animate={{ opacity: 1, y: 50, x: -50 }}
                        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
                        
                    >
                        <p className='flex gap-2 items-center text-xl font-semibold'><TfiReload className='text-xl text-primary' />350K+</p>
                        <p className='text-gray-600 text-sm dark:text-Description2 pl-8'>Job Search Success</p>
                    </motion.div>
                </div>
                <div className='flex flex-col justify-center lg:w-[700px] px-6'>
                    <h1 className='text-4xl font-semibold'>Get the job that's right for you</h1>
                    <p className='mt-5 font-sans'>Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.</p>
                    <div className='mt-8 font-sans space-y-6'>
                        <p className='flex items-center gap-1'><IoCheckmarkCircle className='text-primary' />Access to millions of job seekers</p>
                        <p className='flex items-center gap-1'><IoCheckmarkCircle className='text-primary' />Only pay for the candidates you want to contact</p>
                        <p className='flex items-center gap-1'><IoCheckmarkCircle className='text-primary' />Post unlimited jobs for free—all from one place</p>
                        <p className='flex items-center gap-1'><IoCheckmarkCircle className='text-primary' />Premium job placement on SimplyHired, Indeed, & over 100 job sites</p>
                        <p className='flex items-center gap-1'><IoCheckmarkCircle className='text-primary' />Hiring solutions & pricing that works with seasonal hiring changes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetJobSection;
