import { useState, useRef, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    deleteUserStart,
    deleteUserFailure,
    deleteUserSuccess,
} from "../redux/user/userSlice.js";

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";

const profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const fileRef = useRef(null);

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadPercentage(Math.round(progress));
            },
            (error) => {
                setFileUploadError(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData({ ...formData, avatar: downloadURL });
                });
            },
        );
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();


            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };

    const handleDeleteUser = async () => {
        try{
        dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
            method: "DELETE",});
            const data = res.json();
            if(data.success === false){
                dispatch(deleteUserFailure(data.message));
                return;
            }

            dispatch(deleteUserSuccess(data));
            // navigate('/sign-in');
        }
        catch(error){
            dispatch(deleteUserFailure(error.message));
        }

    }
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">profile</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <img
                    src={formData.avatar || currentUser.avatar}
                    alt="profile"
                    className="w-24 h-24 rounded-full object-cover cursor-pointer self-center mt-2"
                    onClick={() => fileRef.current.click()}
                />

                <p className="text-center text-sm">
                    {fileUploadError ? (
                        <span className="text-red-700">
                            Error Image upload (image must be less than 2Mb)
                        </span>
                    ) : uploadPercentage > 0 && uploadPercentage < 100 ? (
                        <span className="text-slate-700">
                            {`Uploading: ${uploadPercentage}%`}
                        </span>
                    ) : uploadPercentage === 100 ? (
                        <span className="text-green-700">Image Uploaded Successfully!</span>
                    ) : (
                        ""
                    )}
                </p>
                <input
                    defaultValue={currentUser.username}
                    type="text"
                    className="border rounded-lg p-3"
                    id="username"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    defaultValue={currentUser.email}
                    className="border rounded-lg p-3"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    className="border rounded-lg p-3"
                    id="password"
                    onChange={handleChange}
                />
                <button
                    disabled={loading}
                    className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
                >
                    {loading ? 'Loading...' : 'Update'}
                    </button>
            </form>
            <div className="flex justify-between mt-3">
                <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">Delete Account</span>
                <span className="text-red-700 cursor-pointer">Sign Out</span>
            </div>
            <p className="text-red-700 mt-5">{error ? error : ""}</p>
            <p className="text-green-700 mt-5">
                {updateSuccess ? "User is updated successfully!" : ""}
            </p>
        </div>
    );
};

export default profile;
