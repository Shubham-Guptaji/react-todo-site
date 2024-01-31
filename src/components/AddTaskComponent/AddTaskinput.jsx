import { Fragment, useContext, useState } from "react";
import myContext from "../../assets/context/myContext";

const AddTaskinput = () => {
  const [task, settask] = useState("");
  const { setTodoData } = useContext(myContext);

  const taskHandler = (e) => {
    settask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(!task) {
      alert("Task field can't be empty");
      return
    }
    let id = Math.random() * 100000;
    setTodoData((prevState) => {
      return [...prevState, { id, task, isCompleted: false }];
    });
    settask("");
  };

  return (
    <Fragment>
      <form className="ps-4 pe-4">
        <label htmlFor="newtask" className="sr-only"></label>
        <input
          type="text"
          id="newtask"
          className="border text-blue-700 p-2 w-full text-md rounded"
          value={task}
          onChange={taskHandler}
          placeholder="Your Task"
        />
        <p className="text-sm text-slate-500 mt-1">Enter what you want to do ? &#128512;</p>
        <button
          type="submit"
          onClick={submitHandler}
          className="p-2 ps-4 pe-4 bg-blue-500 border-1 rounded text-white my-4 hover:bg-blue-600 active:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default AddTaskinput;
