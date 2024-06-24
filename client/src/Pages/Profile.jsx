import { useState } from "react";
import { useSelector } from "react-redux";

const profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">profile</h1>

      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder={currentUser.username}
          className="border rounded-lg p-3"
          id="username"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder={currentUser.email}
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
                <button className="bg-slate-700 hover:opacity-95 disabled:opacity-80 text-white font-bold py-2 px-4 rounded-lg uppercase">Update</button>
      </form>
            <div className="flex justify-between mt-3">
                <span className="text-red-700 cursor-pointer">Delete Account</span>
                <span className="text-red-700 cursor-pointer">Sign Out</span>
            </div>
    </div>
  );
};

export default profile;
