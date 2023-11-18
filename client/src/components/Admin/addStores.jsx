import { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast'

function AddStores() {
    const [selectedFile, setSelectedFile] = useState(null);

    const initialValues = {
        name: "",
        description: "",
        type: "",
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid black',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        outline: 'none',
    };


    const handleSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("type", values.type);

            if (selectedFile) {
                formData.append("storeFile", selectedFile);
            }

            const response = await axios.post(
                "http://localhost:4000/api/admin/addStore",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            toast.success("Store Added successfully");
            console.log(response.data);
        } catch (error) {
            toast.error(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <>
            <Toaster position="top-center"></Toaster>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
                <h1 className="text-center mb-6 text-2xl font-bold">Add New Store</h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Name:
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                style={inputStyle}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-1 font-medium">
                                Description:
                            </label>
                            <Field
                                type="text"
                                id="description"
                                name="description"
                                style={inputStyle}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block mb-1 font-medium">
                                Type:
                            </label>
                            <Field
                                type="text"
                                id="type"
                                name="type"
                                style={inputStyle}
                            />
                        </div>

                        <div className="my-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="storeFile"
                            >
                                Upload image:
                            </label>
                            <input
                                id="storeFile"
                                type="file"
                                style={inputStyle}
                                onChange={(event) => setSelectedFile(event.target.files[0])}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-pink-200"
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default AddStores;