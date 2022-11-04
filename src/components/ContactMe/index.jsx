import { useState } from "react";

const ContactMe = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div>
        <div className=" mt-16 mb-12">
          <h1 className=" text-4xl font-bold pb-4">Contact Me</h1>
          <p className=" leading-7 text-gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form>
          <div className=" flex flex-col mb-6 gap-1">
            <label className=" ">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="first_name"
              className=" h-11 py-2 px-3 border-solid border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none "
            />
          </div>

          <div className=" flex flex-col mb-6 gap-1">
            <label className=" ">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              id="last_name"
              className=" h-11 py-2 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none"
            />
          </div>

          <div className=" flex flex-col mb-6 gap-1">
            <label className=" ">Email</label>
            <input
              type="email"
              placeholder="youremail@email.com"
              id="email"
              className=" h-11 py-2 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none"
            />
          </div>

          <div className=" flex flex-col mb-6 gap-1">
            <label className=" ">Message</label>
            <textarea
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible"
              id="message"
              className=" h-32 py-2 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none"
            />
          </div>

          <div className=" flex items-start">
            <input
              type="checkbox"
              className="bg-gray-50 border-2 border-gray-300 focus:ring-3 focus:ring-blue-300 h-7 w-7 rounded-md active:border-2 active:border-blue-200"
              onChange={() => handleChecked()}
            />
            <p className=" ml-3 text-gray-600 ">
              You agree to providing your data to Seun who may contact you.
            </p>
          </div>

          <button
            id="btn__submit"
            className="w-full rounded-lg text-white mt-8 mb-16 bg-blue-700 py-3 px-5 disabled:border-solid disabled:bg-blue-200  active:bg-blue-600 active:border-blue-200 active:ring"
            disabled={checked}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
