import { useContext } from "react";
import myContext from "../../assets/context/myContext";

const TaskCard = ({data}) => {
  const { todoData, setTodoData } = useContext(myContext);
  const taskCompletionHandler = () => {
    setTodoData(todoData.map(obj => {
        if(obj.id === data.id) {
            obj.isCompleted = !obj.isCompleted
            return obj;
        }
        else{
            return obj
        }
    }));
  }
  const taskDeletionHandler = () => {
    setTodoData(todoData.filter(obj => obj.id !== data.id));
  }
  return (
    <tr className="*:py-3 *:font-medium">
      <td>{data.task}</td>
      <td className={`${data.isCompleted ? 'text-green-500' : 'text-orange-500'}`}>{data.isCompleted ? 'Completed' : 'Not Completed'}</td>
      <td>
        <div className="grid grid-cols-2 gap-2">
        <button className={`bg-blue-500 text-white py-1 px-2 rounded-sm`} onClick={taskCompletionHandler}>{data.isCompleted ? 'Restart' : 'Complete'}</button>
        <button className="bg-red-500 text-white py-1 px-2 rounded-sm" onClick={taskDeletionHandler}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default TaskCard;
