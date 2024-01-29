import { Fragment } from "react";
import AddTaskinput from "./AddTaskComponent/AddTaskinput";

const AddTask = () => {
    return (
        <Fragment>
            <section className="border border-slate-500 rounded w-10/12 mx-auto mt-7 max-w-4xl box-border">
                <h1 className="p-2 px-4 text-blue-500 bg-gray-100 text-xl rounded-t border-b">Add Tasks</h1>
                <h2 className="text-xl p-3 mt-1 px-4">Item</h2>
                <AddTaskinput/>
            </section>
        </Fragment>
    )
}

export default AddTask;