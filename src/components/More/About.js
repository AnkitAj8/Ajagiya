import React from "react";

const About = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            href="https://images.unsplash.com/photo-1729434228800-846f37e3f13e?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src=""
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:bg-red-500 block">
            Case study
          </div>
          <a
            href="https://images.unsplash.com/photo-1729434228800-846f37e3f13e?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
          </button>
        </div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            value="tbone"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-white border border-slatwe-300 rounded-md text-sm shadow-sm placeholder-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-50 "
          />
        </label>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
};

export default About;
