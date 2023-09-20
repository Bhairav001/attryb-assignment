import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CarAdd = () => {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
    });

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const CarDetails = async () => {
        if (!formData?.image) {
            toast.error('Please Enter Image');
        } else if (!formData?.title) {
            toast.error('Please Enter Title');
        } else if (!formData?.description) {
            toast.error('Please Enter Description');
        } else {
            try {
                let url = 'https://atrryb-backend.onrender.com/buycars/add_car_detail';
                const config = {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                };

                axios
                    .post(url, formData, { headers: config })
                    .then((res) => {
                        if (res) {
                            toast.success(res?.data?.message);
                            history.push('/getcar');
                        }
                    })
                    .catch((err) => {
                        console.log(err, 'err');
                    });
            } catch (err) {
                console.log(err, 'err-cath');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-lg py-12 px-6 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">
                        Add Car Details
                    </h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={CarDetails}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="image" className="block text-gray-600">
                                Image
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.image}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-gray-600">
                                Title
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.title}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-gray-600"
                            >
                                Description
                            </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.description}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <button
                            type="button"
                            onClick={CarDetails}
                            className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CarAdd;
