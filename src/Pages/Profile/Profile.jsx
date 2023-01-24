import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/Auth/AuthContexts";

const Profile = () => {
  const authInfo = useContext(AuthContext);
  const { user, handleUpdateUserName, handleDeleteUser } = authInfo;
  const { displayName, photoURL, email } = user;

  // update profile
  const handleUpdateUser = (e) => {
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    handleUpdateUserName(name, image)
      .then(() => {
        toast.success("Information Updated Successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, [1000]);
      })
      .catch((err) => toast.error(err.message));
  };

  // delete account
  const handleDeleteAccount = () => {
    handleDeleteUser()
      .then(() => toast.success("Account Deleted Successfully"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-10">
      <h2 className="text-4xl font-bold text-[#d71553] text-center my-6">
        Welcome to your Profile Page
      </h2>
      <h4 className="text-xl font-bold text-[#d71553] text-center ">
        Hello {displayName}
      </h4>
      <div className="flex justify-center items-center">
        <img
          src={photoURL}
          alt=""
          className="w-28 h-28 rounded-full border-2 border-gray-500 p-2"
        />
      </div>
      <div className="my-4">
        <p className="text-lg font-bold mb-3">Update your Profile</p>
        <form onSubmit={handleUpdateUser}>
          <div className="grid gap-x-2 gap-y-6 grid-cols-1 md:grid-cols-2 bg-rose-50 p-8">
            {/* name  */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="w-full lg:w-[80%] xl:w-[60%] block rounded px-2 py-2 outline-none focus:outline-1 focus:outline-[#DA0B4E]"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            {/* email */}
            <div>
              <label htmlFor="name">Email</label>
              <input
                className="w-full lg:w-[80%] xl:w-[60%] block rounded px-2 py-2 outline-none bg-[#DA0B4E] text-white"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                disabled
              />
            </div>
            {/* image url */}
            <div>
              <label htmlFor="name">Image URL:</label>
              <input
                className="w-full lg:w-[80%] xl:w-[60%] block rounded px-2 py-2 outline-none focus:outline-1 focus:outline-[#DA0B4E]"
                type="text"
                name="image"
                id="image"
                placeholder="Enter your image URL"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#DA0B4E] border-2 border-transparent text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#d71553] hover:border-2 hover:border-[#DA0B4E] mt-4"
          >
            Update
          </button>
        </form>
      </div>
      {/* delete account */}
      <div className="border-t-2 border-[#DA0B4E] mt-10 py-5">
        <h2 className="text-3xl font-bold text-center my-4">
          Want To Delete Your Account ?
        </h2>
        <div className="flex justify-center items-center">
          <button
            onClick={handleDeleteAccount}
            className="bg-[#DA0B4E] border-2 border-transparent text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#d71553] hover:border-2 hover:border-[#DA0B4E] mt-4"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
