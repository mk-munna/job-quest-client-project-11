import React, { useEffect, useState } from 'react';
import { CiHeart, CiUser } from 'react-icons/ci';
import { VscGitStashApply } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const [data, setData] = useState(null)
  
    const { id } = useParams()

    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/job/${id}`)
            .then(res => res.json())
        .then(data=>setData(data))
    }, [])
    console.log(data);
    if (data) {
        const { _id, bannerUrl, title, salaryRange, description, postedBy, deadline, applicants, category } = data;
        const lastWord = title.split(" ").pop();
        console.log(lastWord); 
        return (
            <div className='bg-[#F1F5F8] dark:bg-[#1c333a]'>
                <div className="max-w-[350px]  md:max-w-screen-sm py-20 lg:max-w-[90%] mx-auto flex flex-col lg:flex-row gap-12 justify-evenly">

                    <div className=" rounded-3xl shadow-xl">
                        <img className='rounded-t-3xl w-full' src={bannerUrl} alt="" />
                        <div className="p-6">
                            <div className='flex flex-col md:flex-row justify-normal gap-6 md:justify-between'>
                                <div>
                                    <span className='px-4 text-primary text-sm rounded-md bg-secondary'>{category}</span>
                                    <h1 className='text-2xl font-semibold'>{title}</h1>
                                    <span className='text-sm flex items-center gap-2'> <CiUser />Posted By : {postedBy.name}</span>
                                </div>
                                <div>
                                    <div className='flex gap-4'>
                                        <button className='flex items-center gap-2 bg-primary dark:bg-[#309670] rounded-md px-4 py-4 text-sm text-white dark:text-gray-200  font-Jost'><VscGitStashApply />Apply Now</button>
                                        <button className='flex items-center gap-2 bg-[#E5EBEF] dark:bg-[#344b55] rounded-md px-4 py-4 text-sm text-black dark:text-gray-200  font-Jost'> <CiHeart />Save Job</button>
                                    </div>
                                    <div className='mt-2 flex gap-6'>
                                        <span className='text-sm'>{applicants} Applicants </span>
                                        <span className='text-sm text-primary'> Deadline : {deadline} </span>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 px-10 py-5 rounded-lg mt-6 grid grid-cols-2 md:grid-cols-4'>
                                <div>
                                    <p className='text-sm'>Job Category</p>
                                    <h2 className='text-primary md:text-lg lg:text-xl  font-semibold'>{category}</h2>
                                </div>
                                <div>
                                    <p className='text-sm'>Experience</p>
                                    <h2 className='text-primary md:text-lg  lg:text-xl font-semibold'>{'2 Years'}</h2>
                                </div>
                                <div>
                                    <p className='text-sm'>Salary</p>
                                    <h2 className='text-primary md:text-lg lg:text-xl  font-semibold'>{salaryRange}</h2>
                                </div>
                                <div>
                                    <p className='text-sm'>Role</p>
                                    <h2 className='text-primary md:text-lg lg:text-xl font-semibold'>{lastWord}</h2>
                                </div>
                            </div>
                            <div className='mt-6 lg:pr-24'>
                                <span className='border-primary border-b-2 pb-2'>Job Description</span>
                                <p className='mt-6 text-Description dark:text-Description2 leading-8'>{ description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    else {
        <div>loading...</div>
    }
};

export default ViewDetails;