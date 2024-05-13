import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    useEffect(() => {
        if (activeTabIndex === 0) {
            fetch(`${import.meta.env.VITE_API_URL}/jobs`)
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                })
                .catch(err => console.log(err))
        }
        if (activeTabIndex === 1) {
            fetch(`${import.meta.env.VITE_API_URL}/jobs?category=onsite`)
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                })
                .catch(err => console.log(err))
        }

    }, [])
    console.log(jobs)
    const handleTabChange = (index) => {
        setActiveTabIndex(index);

        console.log("Tab changed to index:", index);
    };

    return (
        <div className=''>
            <h2 className='text-center font-semibold text-4xl text-heading'>Featured Jobs</h2>
            <p className='text-center mt-4'>Find the right career opportunity for you</p>

            <div className='mt-6'>
                <Tabs onSelect={handleTabChange} selectedIndex={activeTabIndex}>
                    <TabList className={'flex justify-center gap-4'}  >
                        <Tab className={`cursor-pointer ${activeTabIndex === 0 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>All Jobs</Tab>
                        <Tab className={`cursor-pointer ${activeTabIndex === 1 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>On Site</Tab>
                        <Tab className={`cursor-pointer ${activeTabIndex === 2 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Remote</Tab>
                        <Tab className={`cursor-pointer ${activeTabIndex === 3 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Part - time</Tab>
                        <Tab className={`cursor-pointer ${activeTabIndex === 4 ? "!bg-primary font-semibold outline-none border-none !text-white px-4 py-1 !rounded-full" : "!bg-slate-100 font-semibold  outline-none border-none !text-gray-600 px-4 py-1 !rounded-full"}`}>Hybrid</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedJobs;
