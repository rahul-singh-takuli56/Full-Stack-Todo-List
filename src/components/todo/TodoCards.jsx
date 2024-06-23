import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
const TodoCards = ({ title, body, dueDate, id, delid, toggleUpdate }) => {
  return (
    <div className="todo-card p-3 border-2 border-black shadow-xl">
      <div className="h-[100px]">
        <h5 className="font-bold">{title}</h5>
        <p className="tracking-wide my-3">{body}</p>
        {dueDate && (
          <p className="text-gray-500">
            <span className="text-black font-semibold">Due Date:</span>{" "}
            {dueDate}
          </p>
        )}
      </div>
      <div className="flex justify-around items-center my-4">
        <div
          onClick={toggleUpdate}
          className="flex items-center cursor-pointer"
        >
          <GrDocumentUpdate className="text-3xl text-green-600" />
          Update
        </div>
        <div
          onClick={() => delid(id)}
          className="flex items-center cursor-pointer"
        >
          <MdDelete className="text-3xl text-red-600" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
