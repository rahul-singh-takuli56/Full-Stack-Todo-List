import React from "react";

const Update = ({ onClose }) => {
  return (
    <div className="px-36 h-[600px] bg-orange-300 flex flex-col justify-center items-start">
      <p className="text-4xl font-semibold underline pl-[300px]">
        Update Your Task
      </p>
      <input
        type="text"
        className="my-4 w-[800px] p-3 focus:outline-none"
        placeholder="Enter updated title..."
      />
      <textarea
        className="p-3 w-[800px] h-[200px] focus:outline-none"
        placeholder="Enter updated body..."
      />
      <div>
        <button className="my-4 bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg">
          UPDATE
        </button>
        <button
          onClick={onClose}
          className="my-4 mx-3 bg-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Update;
