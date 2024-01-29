import { Fragment, useContext, useState } from "react";
import myContext from "../../assets/context/myContext";

const AddTaskinput = () => {
  const [mytask, setmytask] = useState("");
  const { setTodoData } = useContext(myContext);

  const mytaskHandler = (e) => {
    setmytask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000);
    setTodoData((prevState) => {
      return [...prevState, { id, mytask }];
    });
    setmytask("");
  };

  return (
    <Fragment>
      <form className="ps-4 pe-4">
        <label htmlFor="newtask"></label>
        <input
          type="text"
          id="newtask"
          className="border text-slate-500 p-2 w-full text-md rounded"
          value={mytask}
          onChange={mytaskHandler}
          placeholder="Your Task"
        />
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
