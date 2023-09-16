import React from "react";
import Cards from "../components/Cards";

const Task = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center scroll-smooth scroll-py-24">
        <h1 className="text-5xl text-center text-transparent font-bold font-playfair bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-green-700 mt-12 mb-8">
          Task
        </h1>
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-playfair text-lg text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              className="shadow font-roboto  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:scale-105 transition-transform ease-in-out  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-playfair text-lg  font-bold mb-2"
            >
              Description
            </label>
            <textarea
              className="shadow font-roboto  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:scale-105 transition-transform ease-in-out delay-150 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
              id="description"
              placeholder="Enter description"
            />
          </div>
          <div className="text-center">
            <button
              className="bg-gradient-to-r hover:scale-105 transition-transform ease-in-out delay-150  from-purple-600 via-violet-600 to-green-700 hover:from-green-700 hover:via-cyan-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <Cards />
    </>
  );
};

export default Task;
