import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CiBadgeDollar, CiUser } from 'react-icons/ci';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import JobCart from './JobCart';

const FeaturedJobs = () => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    // data loading

    const { data, isLoading, refetch, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['all-jobs']
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
        return data
    }
    console.log(data)
    const handleTabChange = (index) => {
        setActiveTabIndex(index);

        console.log("Tab changed to index:", index);
    };



    return (
        <div className=''>
            <h2 className='text-center font-semibold text-4xl text-heading dark:text-heading2'>Featured Jobs</h2>
            <p className='text-center mt-4'>Find the right career opportunity for you</p>

            <div className='mt-6'>
                <Tabs onSelect={handleTabChange} selectedIndex={activeTabIndex}>
                    <TabList className={'w-[300px] md:w-[590px] mx-auto grid grid-cols-2 md:grid-cols-5 justify-center gap-4'}  >
                        <Tab className={`cursor-pointer text-center ${activeTabIndex === 0 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 dark:!bg-[#b2caca]  font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>All Jobs</Tab>
                        <Tab className={`cursor-pointer text-center ${activeTabIndex === 1 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100  dark:!bg-[#b2caca]  font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>On Site</Tab>
                        <Tab className={`cursor-pointer text-center ${activeTabIndex === 2 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100  dark:!bg-[#b2caca]   font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Remote</Tab>
                        <Tab className={`cursor-pointer text-center ${activeTabIndex === 3 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100   dark:!bg-[#b2caca]  font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Part - time</Tab>
                        <Tab className={`cursor-pointer text-center ${activeTabIndex === 4 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100   dark:!bg-[#b2caca]  font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Hybrid</Tab>
                    </TabList>
                    <TabPanel className={'mt-12'}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                data?.map(job => {
                                    return (
                                        <JobCart key={job._id} job={job}></JobCart>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={'mt-12'}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                data?.filter(job=>job.category==="On Site").map(job => {
                                    return (
                                        <JobCart key={job._id} job={job}></JobCart>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={'mt-12'}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                data?.filter(job=>job.category==="Remote").map(job => {
                                    return (
                                        <JobCart key={job._id} job={job}></JobCart>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={'mt-12'}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                data?.filter(job=>job.category==="Part-Time").map(job => {
                                    return (
                                        <JobCart key={job._id} job={job}></JobCart>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={'mt-12'}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                data?.filter(job=>job.category==="Hybrid").map(job => {
                                    return (
                                        <JobCart key={job._id} job={job}></JobCart>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedJobs;
