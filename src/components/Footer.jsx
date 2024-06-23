const Footer = () => {
  return (
    <>
      <div className="bg-[#bf9f65] h-[250px] mt-10">
        <div>
          <p className="text-4xl   font-bold text-center py-6">ToDoList</p>
          <p className="text-sm   text-center ">
            &copy; {new Date().getFullYear()} My To-Do App. All rights reserved.
            <p>Built with React and Tailwind CSS.</p>{" "}
          </p>
          <div className="text-center pt-4">
            <input
              type="email"
              className="px-3 py-3 rounded-md w-[300px] focus:outline-none placeholder:text-black bg-[#bf9f65] border border-black"
              placeholder="Your email"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
