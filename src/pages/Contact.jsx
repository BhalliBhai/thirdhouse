import React from 'react';

const ContactForm = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col items-center">
      <h3 className="font-semibold text-[24px] lg:text-[28px] my-6 px-5 ">Please fill out the form below to get in touch.</h3>
      <form className="w-full lg:w-[50%] px-5 lg:px-8 pt-3 lg:pb-8 mb-4 ">
        <p className="mb-3">Name (required)</p>
        <div className="mb-6 flex justify-between">
          <div className="w-1/2 mr-2">
            <label className="block text-sm font-normal mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="appearance-none border border-[#A9A9A9] w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-sm font-normal mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className=" appearance-none border border-[#A9A9A9] w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-normal mb-2" htmlFor="message">
          Email (required)
          </label>
          <input
            className=" appearance-none border border-[#A9A9A9] w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-normal mb-2" htmlFor="message">
            Subject (required)
          </label>
          <input
            className=" appearance-none border border-[#A9A9A9] w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-normal mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className=" appearance-none border border-[#A9A9A9] w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="text-white bg-black font-normal py-4 px-6 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
