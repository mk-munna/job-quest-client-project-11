import React, { useContext } from 'react';
import { CiBadgeDollar, CiUser } from 'react-icons/ci';
import { AuthContext } from '../Provider/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
const JobCart = ({ job }) => {
    const { user, clicked, setClicked, id, setId, openModal, setOpenModal, } = useContext(AuthContext)
    // view details handle
    const currentPathname = window.location.pathname;
    const navigate = useNavigate()
    const handleViewDetails = (id) => {
        console.log('id', id);
        setClicked(true)
        setId(id)
        if (user) {
            navigate(`/job/${id}?from=${encodeURIComponent(currentPathname)}`)
        }
        else {
            setOpenModal(true)
        }
    }

    return (
        <div className='border-[1px] rounded-lg dark:border-gray-500 p-4 '>
            <div>
                <span className='px-4 text-primary dark:text-white text-[12px] rounded-md bg-secondary dark:bg-[#334d41]'> Posting Date: {job.postingDate}</span>
                <h1 className='text-xl font-semibold'>{job.title}</h1>
                <span className='text-sm flex items-center gap-2'> <CiUser />Posted By : {job.postedBy.name}</span>
            </div>
            <div className='mt-6'>
                <p className='flex font-semibold text-primary items-center gap-1'><CiBadgeDollar className='text-xl' />{job.salaryRange}<span className='text-gray-500 dark:text-Description2'>/Year</span></p>
            </div>
            <div className='flex justify-between'>
                <p className='text-sm'>Applicants:  {job.applicants}</p>
                <p className='text-sm'>deadline:  {job.deadline}</p>
            </div>
            <div className='text-right mt-4'>
                <a onClick={() => handleViewDetails(job._id)} className="font-medium cursor-pointer text-primary hover:underline dark:text-[#6ac0ab]">Details</a>
            </div>
        </div>
    );
};

export default JobCart;