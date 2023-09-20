import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const CreateOEM = () => {
    const [formData, setFormData] = useState({
        model_name: "",
        year_of_model: "",
        price_of_new_vehicle: "",
        available_colors: "",
        mileage: "",
        power: "",
        max_speed: ""
    });

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const craeteSeat = async () => {
        if (!formData.model_name) {
            alert("Please Enter Model Name");
        }
        else if (!formData.year_of_model) {
            alert("Please Enter Seat Number");
        }
        else if (!formData.price_of_new_vehicle) {
            alert("Please Enter Seat Row Number");
        }
        else {
            try {
                let url = "https://atrryb-backend.onrender.com/buycars/add_oem_detail";
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, formData, { headers: config }).then((res) => {
                    if (res) {
                        alert(res?.data?.message);
                        history.push("/search-oem");
                    }
                }).catch((err) => {
                    console.log(err, "err");
                })
            }
            catch (err) {
                console.log(err, "err-cath");
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-lg py-12 px-6 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Add OEM Detail</h1>
                    <p className="text-lg text-gray-600">
                        To enjoy all of our cool <a href="#" className="text-blue-400">features</a> ✌️
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={craeteSeat}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="model_name" className="block text-gray-600">Model Name</label>
                            <input
                                id="model_name"
                                name="model_name"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.model_name}
                                placeholder="Enter Model Name"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="year_of_model" className="block text-gray-600">Year Of Model</label>
                            <input
                                id="year_of_model"
                                name="year_of_model"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.year_of_model}
                                placeholder="Enter Model Year"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="price_of_new_vehicle" className="block text-gray-600">Price of new vehicle</label>
                            <input
                                id="price_of_new_vehicle"
                                name="price_of_new_vehicle"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.price_of_new_vehicle}
                                placeholder="Enter price of vehicle"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="available_colors" className="block text-gray-600">Available Colors</label>
                            <input
                                id="available_colors"
                                name="available_colors"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.available_colors}
                                placeholder="Enter available colors"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="mileage" className="block text-gray-600">Mileage</label>
                            <input
                                id="mileage"
                                name="mileage"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.mileage}
                                placeholder="Enter mileage"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="power" className="block text-gray-600">Power</label>
                            <input
                                id="power"
                                name="power"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.power}
                                placeholder="Enter power"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="max_speed" className="block text-gray-600">Max Speed</label>
                            <input
                                id="max_speed"
                                name="max_speed"
                                type="text"
                                onChange={handleSubmit}
                                value={formData.max_speed}
                                placeholder="Enter max speed"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <button
                            type="button"
                            onClick={craeteSeat}
                            className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateOEM;
