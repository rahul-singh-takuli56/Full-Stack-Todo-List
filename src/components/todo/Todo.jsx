import { useState } from "react";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

let id = sessionStorage.getItem("id");

const Todo = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [Inputs, setInputs] = useState({ title: "", body: "", dueDate: "" });
  const [Array, setArray] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleShow = () => {
    setShowTextarea(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleSubmit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title or Body should not be Empty !");
    } else {
      if (id) {
        await axios.post(
          "https://todo-list-backend-gamma.vercel.app/v2/addTask"
        ),
          { title: Inputs.title, body: Inputs.body, id: id }.then((res) => {
            console.log(res);
          });
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "", dueDate: "" });
        toast.success("Your Task Is Added Successfully !");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "", dueDate: "" });
        toast.success("Your Task Is Added Successfully !");
        toast.error("Your Task Is Not Saved Please Signup !");
      }
    }
  };

  const del = (id) => {
    const updatedArray = Array.filter((item, index) => index !== id);
    setArray(updatedArray);
    toast.error("Task Deleted Successfully !");
  };

  const toggleUpdate = () => {
    setShowUpdate(!showUpdate);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
  };

  return (
    <>
      <div className="todo relative mt-3">
        <ToastContainer />
        <div className="todo-main">
          <div className="todo-main container flex flex-col justify-center items-center">
            <div className="todo-inputs flex flex-col border-2 shadow-2xl shadow-slate-400 rounded-lg">
              <input
                type="text"
                name="title"
                value={Inputs.title}
                placeholder="Enter the name of Title"
                className="my-2 p-2 outline-none w-[600px]"
                onClick={handleShow}
                onChange={handleChange}
              />
              {showTextarea && (
                <>
                  <textarea
                    id="textarea"
                    type="text"
                    name="body"
                    value={Inputs.body}
                    placeholder="Enter the description"
                    className="w-[600px] h-[100px] p-2 outline-none"
                    onChange={handleChange}
                  />
                  <label className="ml-2 text-black/80">
                    Select the Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={Inputs.dueDate}
                    className="my-2 p-2 outline-none w-[600px]"
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 items-center my-3 ml-[500px] rounded-lg">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 text-white tracking-wide font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row grid grid-cols-3 col-span-10">
              {Array.map((item, index) => (
                <div key={index} className="mx-5 my-2">
                  <TodoCards
                    title={item.title}
                    body={item.body}
                    dueDate={item.dueDate}
                    id={index}
                    delid={del}
                    toggleUpdate={toggleUpdate}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showUpdate && (
        <div className="todo-update w-full h-[540px] fixed top-[80px] left-[0px]">
          <div className="container">
            <Update onClose={handleCloseUpdate} />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
