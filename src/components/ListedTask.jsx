import Taskslist from "./ListedTaskComponent/Taskslist";


const ListedTask = () => {
    return (
        <>
            <section className="border border-slate-400 rounded w-10/12 mx-auto mt-4 max-w-4xl box-border">
                <h2 className="p-1 px-4 text-blue-500 bg-gray-50 text-lg rounded-t border-b font-bold">Tasks</h2>
                <div className="px-4">
                <table className="w-full ">
                    <thead>
                        <tr className="*:py-2">
                            <th className="text-start">Tasks</th>
                            <th className="text-start">Status</th>
                            <th className="text-start">Action</th>
                        </tr>
                    </thead>
                    <Taskslist />
                </table>
                </div>
            </section>
        </>
    )
}

export default ListedTask;