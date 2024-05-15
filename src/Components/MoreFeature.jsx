import React from 'react';
import { FaBusinessTime, FaCaravan, FaPaperPlane } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { MdLibraryBooks, MdOutlineHealthAndSafety, MdOutlineMobileFriendly } from 'react-icons/md';
import { PiBrain } from 'react-icons/pi';
import { motion } from "framer-motion";

const MoreFeature = () => {
    return (
        <div className='bg-[#F1F5F8] dark:bg-[#1a2b2b] pt-12 py-24'>
            <div className='max-w-[90%] mx-auto mt-12'>
                <div>
                    <h1 className='text-center font-bold text-4xl dark:text-heading2 text-heading'>Explore More Categories</h1>
                    <p className='text-center mx-auto mt-4 dark:text-Description2 text-Description leading-7 md:w-[600px]'> Find new passions and uncover hidden gems as you navigate through our diverse selection. Explore beyond boundaries and embark on a journey of endless possibilities.</p>
                </div>
                <motion.div
                    variants={{
                    hidden: { opacity: 0},
                    show: { opacity: 1, transition: { staggerChildren: 0.25}}
                    }}
                    initial='hidden'
                    animate='show'
                    
                    className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 '>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } } }
                        className=' bg-white dark:bg-[#2b3f3a] rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><MdLibraryBooks /></p>
                        <p className='font-semibold text-2xl'>Accounting & Finance</p>
                        <p className='leading-7'>You can view all popular jobs according your future careers.</p>
                        <p className='text-primary cursor-pointer hover:underline'>64 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]  rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><FaCaravan/></p>
                        <p className='font-semibold text-2xl'>Automotive Jobs</p>
                        <p className='leading-7'>Financial insights for informed decisions and strategic growth planning.</p>
                        <p className='text-primary cursor-pointer hover:underline'>42 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><FaBusinessTime/></p>
                        <p className='font-semibold text-2xl'>Business & Tech</p>
                        <p className='leading-7'>Intersection of business strategy and technological innovation..</p>
                        <p className='text-primary cursor-pointer hover:underline'>22 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><PiBrain/></p>
                        <p className='font-semibold text-2xl'>Education Training</p>
                        <p className='leading-7'>Educational empowerment through comprehensive training programs.</p>
                        <p className='text-primary cursor-pointer hover:underline'>112 Active Jobs</p>
                    </motion.div>
                    <motion.div 
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><MdOutlineHealthAndSafety/></p>
                        <p className='font-semibold text-2xl'>Healthcare</p>
                        <p className='leading-7'>Providing holistic care and nourishing well-being through healthcare services.</p>
                        <p className='text-primary cursor-pointer hover:underline'>32 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><IoFastFood/></p>
                        <p className='font-semibold text-2xl'>Restaurant & Food</p>
                        <p className='leading-7'>Culinary delights and dining experiences for food enthusiasts.</p>
                        <p className='text-primary cursor-pointer hover:underline'>142 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><FaPaperPlane/></p>
                        <p className='font-semibold text-2xl'>Transportation</p>
                        <p className='leading-7'>Efficient mobility solutions for seamless travel experiences worldwide.</p>
                        <p className='text-primary cursor-pointer hover:underline'>22 Active Jobs</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className=' bg-white dark:bg-[#2b3f3a]   rounded-xl p-8 space-y-4'>
                        <p className='text-7xl text-primary'><MdOutlineMobileFriendly/></p>
                        <p className='font-semibold text-2xl'>Telecommunications</p>
                        <p className='leading-7'>Connecting people worldwide through innovative communication technologies and services.</p>
                        <p className='text-primary cursor-pointer hover:underline'>22 Active Jobs</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default MoreFeature;