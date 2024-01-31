import { Fragment } from "react";
import AddTaskinput from "./AddTaskComponent/AddTaskinput";

const AddTask = () => {
    return (
        <Fragment>
            <section className="border border-slate-400 rounded w-10/12 mx-auto mt-7 max-w-4xl box-border">
                <h1 className="p-1 px-4 text-blue-500 bg-gray-50 text-lg rounded-t border-b font-bold">Add a Task</h1>
                <h2 className="text-lg p-3 px-4 pb-1 font-semibold">Item</h2>
                <AddTaskinput/>
            </section>
        </Fragment>
    )
}

export default AddTask;