import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth.jsx";

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);

            navigate('/sign-in');
        } catch (error) {
            setError(error.message);
            setLoading(false);
            return;
        }
    };
    return (
        <div className="p-3 max-w-2xl mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    className="border rounded-lg p-3"
                    id="username"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="email"
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
                    className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80"
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account? </p>
                <Link to="/sign-in" className="text-blue-700">
                    Sign In
                </Link>
            </div>
            {error && <p className="text-red-500 mt-5"> {error}</p>}
        </div>
    );
};

export default SignUp;
