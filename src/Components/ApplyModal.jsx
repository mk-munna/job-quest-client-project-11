import React, { useContext, useRef, useState } from 'react';
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { VscGitStashApply } from 'react-icons/vsc';
import { AuthContext } from '../Provider/AuthContextProvider';
import toast from 'react-hot-toast';
import { MdOutlineEditNote } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const ApplyModal = ({ job }) => {
    const { _id, bannerUrl, title, salaryRange, postingDate, description, postedBy, deadline, applicants, category } = job
    const { user } = useContext(AuthContext)

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: user.displayName || '',
        email: user.email || "",
        link: ''
    });
    const resumeInputRef = useRef();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const queryClient = useQueryClient();
    const { mutateAsync, } = useMutation({
        mutationFn: async (id, status) => {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/patch/${id}`)
            console.log(data);
        },
        mutationKey: ['applicants'],
        onSuccess: () => {
            console.log('Success');
        }
    })

    const handleSubmit = async () => {

        console.log(formData);
        setOpenModal(false)
        const applicantsData = {
            applicantsName: formData.name,
            applicantsEmail: formData.email,
            applicantsResumeLink: formData.link,
            status: 'pending',
            jobId: _id,
            postedBy: postedBy,
            bannerUrl,
            title,
            salaryRange,
            postingDate,
            deadline,
            description,
            category
        }
    // console.log(applicantsData)
        const  data  = await axios.post(`${import.meta.env.VITE_API_URL}/apply`, {
            applicantsData
        })
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    toast.success('Successfully applied!')
                    axios.patch(`${import.meta.env.VITE_API_URL}/applicants/${_id}`)
                        .then(data => {
                            console.log(data.data)
                            // queryClient.invalidateQueries('jobs')
                        })
                    
                    
                }
        })
        // console.log(data)

        // await mutateAsync(
        //     {
        //         id: _id,
        //         status
        //     },
        //     {
        //         onSuccess: () => {
        //             toast.success('Successfully applied!')
        //             queryClient.invalidateQueries('jobs')
        //         }
        //     })
        // setFormData({
        //     ...formData,
        //     link: ''
        // });
    };
    const currentDate = new Date();
    console.log(currentDate)
    console.log(deadline);



    const buttonClicked = () => {
        if (new Date() > new Date(deadline)) {
            toast.error('We are sorry! Deadline is over')
        } else {
            setOpenModal(true)
        }
    }
    return (
        <div>
            {
                user?.email === postedBy?.email ? (
                    <Link to={`/update/${_id}`}><button className='flex items-center gap-2 bg-[#419ea5] dark:bg-[#5e796f] rounded-md px-4 py-4 text-sm text-white dark:text-gray-200  font-Jost'><MdOutlineEditNote className='text-xl' />Update Now</button></Link>
                ) : (
                    <button onClick={buttonClicked} className='flex items-center gap-2 bg-primary dark:bg-[#309670] rounded-md px-4 py-4 text-sm text-white dark:text-gray-200  font-Jost'><VscGitStashApply />Apply Now</button>
                )
            }
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={resumeInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-3xl text-center font-medium text-gray-900 dark:text-white">APPLY JOB</h3>
                            <div>
                                <Label htmlFor="name" value="Your Name" />
                                <input id="name" name="name" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2 dark:border-gray-500' type="text" value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <Label htmlFor="email" value="Your Email" />
                                <input id="email" name="email" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2 dark:border-gray-500' type="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div>
                                <Label htmlFor="link" value="Your Resume Link" />
                                <input id="link" name="link" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2 dark:border-gray-500' ref={resumeInputRef} type="text" value={formData.link} onChange={handleInputChange} />
                            </div>
                            <div className="w-full">
                                <button disabled={!formData.link} className='bg-primary w-full py-2 rounded-md text-white' type="submit">Apply</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ApplyModal;
