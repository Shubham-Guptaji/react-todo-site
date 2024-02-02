import { useContext, useState } from "react";
import myContext from "../../context/myContext";

const TaskCard = ({ data }) => {
  const { todoData, setTodoData } = useContext(myContext);
  const [oldInput, setNewInput] = useState(data.task);
  const [isEditable, setIsEditable] = useState(false);

  const editHandler = () => {
    if (!isEditable) {
      setIsEditable(!isEditable);
      return;
    }
    setTodoData(
      todoData.map((obj) => {
        if (obj.id === data.id) {
          obj.task = oldInput;
          return obj;
        } else {
          return obj;
        }
      })
    );
    setIsEditable(!isEditable);
  };
  const taskChangeHandler = (e) => {
    setNewInput(e.target.value);
  };

  const taskCompletionHandler = () => {
    setTodoData(
      todoData.map((obj) => {
        if (obj.id === data.id) {
          obj.isCompleted = !obj.isCompleted;
          return obj;
        } else {
          return obj;
        }
      })
    );
  };
  const taskDeletionHandler = () => {
    setTodoData(todoData.filter((obj) => obj.id !== data.id));
  };
  return (
    <tr className="*:font-medium flex sm:grid sm:grid-cols-3 lg:grid-cols-4 w-full gap-1 border border-blue-500 rounded px-2 md:pe-3 py-1 mb-2">
      <td
        className={`col-span-2 md:col-auto lg:col-span-2 flex gap-2 items-center ${
          isEditable ? "py-1" : "py-2"
        } ${data.isCompleted ? "line-through text-slate-700" : ""}`}
      >
        <button
          className={`appearance-none block md:hidden rounded-sm cursor-pointer ${
            data.isCompleted ? "" : "w-4 h-4 border border-slate-600 "
          }`}
          onClick={taskCompletionHandler}
        >
          {data.isCompleted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="19"
              height="19"
              fill="lime"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          ) : (
            ""
          )}
        </button>

        {isEditable ? (
          <input
            type="text"
            value={oldInput}
            className="px-2 py-1 w-full"
            onChange={taskChangeHandler}
            autoFocus
          />
        ) : (
          data.task
        )}
      </td>
      <td
        className={`${
          data.isCompleted ? "text-green-500" : "text-orange-500"
        } col-auto py-2 hidden md:block`}
      >
        {data.isCompleted ? "Completed" : "Not Completed"}
      </td>

      <td className="sm:col-auto py-2 ml-auto">
        <div className="flex gap-2 max-w-[220px] justify-between">
          <button onClick={editHandler}>
            {isEditable ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="25"
                height="25"
                fill="blue"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="25"
                height="25"
                fill="blue"
              >
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
              </svg>
            )}
          </button>
          <button
            className={`bg-blue-500 text-white py-1 px-2 rounded-sm w-24 hidden sm:block`}
            onClick={taskCompletionHandler}
          >
            {data.isCompleted ? "Restart" : "Complete"}
          </button>
          <button
            className="bg-red-500 py-1 px-1 rounded-sm block md:hidden"
            onClick={taskDeletionHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="22"
              height="22"
              fill="white"
            >
              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </button>
          <button
            className="bg-red-500 text-white py-1 px-2 rounded-sm hidden md:block"
            onClick={taskDeletionHandler}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskCard;
