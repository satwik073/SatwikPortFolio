import React, { useState } from 'react';
import { MdMarkUnreadChatAlt } from "react-icons/md";
import "../assets/Css/fonts.css"

const OpenModalConstant = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        Message: ''
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await fetch('https://satwikportfolio-server-backend.onrender.com/v1/portfolio/form/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
      
            const data = await response.json();
            console.log(data); 
            setSubmittedData(formData);
            setFormData({
                userName: '',
                userEmail: '',
                Message: ''
            });
            setIsOpen(false);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className={`fixed bottom-8 right-8 z-20`}>
            <button
                onClick={() => setIsOpen(true)}
                className="px-3 py-3 mx-auto tracking-wide bg-black text-white text-2xl capitalize transition-colors duration-300 transform rounded-full"
            >
                <MdMarkUnreadChatAlt />
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex md:mt-24 mt-16 items-center justify-center z-50 overflow-x-hidden overflow-y-auto bg-opacity-50 backdrop-filter backdrop-blur-md">
                    <div className="relative w-full max-w-md p-6 bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black hover:text-gray-800"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <h3 className="text-2xl font-bold desBox pb-8 px-6 leading-6 capitalize text-black" id="modal-title">
                            Connect With Me
                        </h3>
                        <form onSubmit={handleSubmit} className='px-7'>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-black font-semibold">Enter Your Name:</label>
                                    <input
                                        type="text"
                                        name="userName"
                                        placeholder="John"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        className="block w-full px-5 py-2.5 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-black font-semibold">Enter Your Email:</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="johndoe@example.com"
                                    value={formData.userEmail}
                                    onChange={handleChange}
                                    className="block w-full px-5 py-2.5 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-black font-semibold">Message</label>
                                <textarea
                                    name="Message"
                                    placeholder="Message"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    className="block w-full px-5 py-2.5 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 mt-8 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpenModalConstant;
