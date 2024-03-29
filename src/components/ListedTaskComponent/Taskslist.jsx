import  { useContext } from "react";
import myContext from "../../context/myContext";
import TaskCard from "./TaskCard";

const Taskslist = () => {
    const { todoData } = useContext(myContext);

    return (
        <tbody className="pb-3">
            {todoData.map((element) => (
                <TaskCard key={element.id} data={element}/>
            ))}
        </tbody>
    );
}

export default Taskslist;
