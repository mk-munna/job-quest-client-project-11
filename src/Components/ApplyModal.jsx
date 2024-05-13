import React, { useContext, useRef, useState } from 'react';
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { VscGitStashApply } from 'react-icons/vsc';
import { AuthContext } from '../Provider/AuthContextProvider';
import toast from 'react-hot-toast';

const ApplyModal = ({ job }) => {
    const { _id, bannerUrl, title, salaryRange, description, postedBy, deadline, applicants, category } = job
    const {user} = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: postedBy.name,
        email: postedBy.email,
    });
    const resumeInputRef = useRef();

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (e) => {
        console.log(formData);
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
            <button onClick={buttonClicked} disabled={user.email === postedBy.email } className='flex items-center gap-2 bg-primary dark:bg-[#309670] rounded-md px-4 py-4 text-sm text-white dark:text-gray-200  font-Jost'><VscGitStashApply />Apply Now</button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={resumeInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl text-center font-medium text-gray-900 dark:text-white ">APPLY JOB</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <input id="name" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2  dark:border-gray-500' name="name" type="text"  required value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <input id="email" name="email" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2  dark:border-gray-500' placeholder="name@company.com" required value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="link" value="Your Resume Link" />
                            </div>
                            <input id="Link" name="link" className='bg-gray-50 dark:bg-[#313c49] focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-heading2 placeholder:text-Description2  dark:border-gray-500' ref={resumeInputRef} placeholder="example.resumelink.com" required  onChange={handleInputChange} />
                        </div>
                        <div className="w-full">
                            <button className='bg-primary w-full py-2 rounded-md text-white' onClick={handleSubmit}>Log in to your account</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ApplyModal;
