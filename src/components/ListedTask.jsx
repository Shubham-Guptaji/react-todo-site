import Taskslist from "./ListedTaskComponent/Taskslist";

const ListedTask = () => {
  return (
    <>
      <section className="border border-slate-400 rounded w-11/12 md:w-10/12 mx-auto mt-4 lg:max-w-4xl box-border">
        <h2 className="p-1 px-4 text-white bg-gray-50 text-lg rounded-t border-b font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          Task List
        </h2>
        <div className="px-4">
          <table className="w-full grid">
            <thead>
              <tr className="grid grid-cols-3 lg:grid-cols-4 w-full py-2 text-blue-700">
                <th className="text-start col-span-2  md:col-auto lg:col-span-2">Tasks</th>
                <th className="text-start md:col-auto md:block hidden">Status</th>
                <th className="text-start md:col-auto">Action</th>
              </tr>
            </thead>
            <Taskslist />
          </table>
        </div>
      </section>
    </>
  );
};

export default ListedTask;
