import { Fragment } from "react";
import AddTaskinput from "./AddTaskComponent/AddTaskinput";

const AddTask = () => {
    return (
        <Fragment>
            <section className="border border-slate-400 rounded w-11/12 md:w-10/12 mx-auto mt-7 lg:max-w-4xl box-border shadow-blue-400 ">
                <h1 className="p-1 px-4 text-white bg-gray-50 text-lg rounded-t border-b font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Add a Task</h1>
                <h2 className="text-lg p-3 px-4 pb-1 font-semibold">Item</h2>
                <AddTaskinput/>
            </section>
        </Fragment>
    )
}

export default AddTask;