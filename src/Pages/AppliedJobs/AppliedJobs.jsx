import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosSearch, IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { Table } from "flowbite-react";
import { BsMenuUp } from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthContextProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// lottie
import Lottie from 'lottie-react';
import loadingLottie from '../../../public/loadingLottie.json'
import { MdOutlineDeleteOutline } from 'react-icons/md';
const AppliedJobs = () => {
    const [filterOption,setFilterOption] = useState('All')
    // data loading
    const [filterData , setFilterData] = useState([])
    const { data, isLoading, refetch, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['applied-jobs']
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/applied-jobs?email=${user.email}`)
        return data
    }
    console.log({ isLoading, refetch, isError, error })
    // const loadedData = useLoaderData()
    const { user, clicked, setClicked, id, setId, openModal, setOpenModal, } = useContext(AuthContext)

    // const [resultData, setResultData] = useState([])
    // useEffect(() => {
    //     if (data) {
    //         const result = data.map(data => data.applicantsData)
    //         setResultData(result)
    //     }
    // },[data])
    // console.log(resultData)

    useEffect(() => {
        if (filterOption === "All") {
            setFilterData(data)
        }
        if (filterOption === "Remote") {
            const result = data.filter(data => data.applicantsData.category === "Remote")
            setFilterData(result)
        }
        if (filterOption === "Hybrid") {
            const result = data.filter(data => data.applicantsData.category === "Hybrid")
            setFilterData(result)
        }
        if (filterOption === "On Site") {
            const result = data.filter(data => data.applicantsData.category === "On Site")
            setFilterData(result)
        }
        if (filterOption === "Part-Time") {
            const result = data.filter(data => data.applicantsData.category === "Part-Time")
            setFilterData(result)
        }
    }, [filterOption,data])
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: "#1CA774",
            showCancelButton: true,
            confirmButtonColor: "#1CA774",
            cancelButtonColor: "#d33",
            confirmButtonText: "Undo"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/undo/${id}`)
                    .then(response => {
                        console.log(response.data)
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Done!",
                                text: "Your application has has been remove.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting application:', error);
                    });
            }
        });
    }

    if (isLoading) {
        return (
            <div>
                <Lottie style={{ width: 550, marginLeft: 'auto', marginRight: 'auto' }} animationData={loadingLottie}></Lottie>

            </div>
        )
    }
    if (data?.length === 0) {
        return (
            <div className=' max-w-[90%] relative mx-auto  lg:h-[400px]'>
                <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center w-full'>
                    <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
                </div>
                <p className=' h-full text-3xl text-gray-400 flex justify-center items-center '>Your have not applied any job yet</p>
            </div>
        )
    }
    if (data) {
        return (
            <div className=''>
                <div>
                    <Helmet>
                        <title>JobQuest | My applied jobs</title>
                    </Helmet>
                </div>
                <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                    <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
                </div>

                <div className='mt-10 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                    <div className='flex  justify-end'>
                        {/* filter form */}
                        <div className='flex justify-end lg:pr-48 items-center text-sm  gap-2'>
                            Filter By
                            <select className='border text-black border-primary px-2 text-[12px] py-1 rounded-full' onChange={e => setFilterOption(e.target.value)} name="" id="">
                                <option value="">Category</option>
                                <option value="All">All</option>
                                <option value="Remote">Remote</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="On Site">On Site</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p className='flex items-center gap-4'><span className='bg-primary p-2 rounded-md'><BsMenuUp className=' text-white' /> </span>You applied {data?.length} jobs</p>
                        <div className="mt-6 overflow-x-auto">
                            <Table>
                                <Table.Head className=''>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Title</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Posting Date</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Application Deadline</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Salary Range</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Category</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '>Status</Table.HeadCell>
                                    <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '>Undo</Table.HeadCell>

                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {
                                        filterData?.map(job => {
                                            const { postingDate, deadline } = job.applicantsData
                                            // Convert postingDate 
                                            const postingDateString = new Date(postingDate).toLocaleDateString();
                                            // console.log({postingDateString});
                                            // Convert deadline 
                                            const deadlineString = new Date(deadline).toLocaleDateString();
                                            // console.log(job)
                                            
                                            return (
                                                <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-[#132e31]">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {job.applicantsData.title}
                                                    </Table.Cell>
                                                    <Table.Cell>{postingDateString}</Table.Cell>
                                                    <Table.Cell>{deadlineString}</Table.Cell>
                                                    <Table.Cell>{job.applicantsData.salaryRange}</Table.Cell>
                                                    <Table.Cell>
                                                        <span className=' px-3 rounded-lg py-[2px] bg-[#efffd9]'>{job.applicantsData.category}</span>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <span className=' px-3 rounded-lg py-[2px] bg-[#fff3d9]'>{job.applicantsData.status}</span>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <button onClick={() => handleDelete(job._id)} className='bg-[#dbfde8] px-4 text-primary py-[2px] rounded-[4px]'>X</button>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    }
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
                <div><Toaster /></div>
            </div>
        );
    }
   
};

export default AppliedJobs;