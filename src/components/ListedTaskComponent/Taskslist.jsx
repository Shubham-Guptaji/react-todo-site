import  { useContext } from "react";
import myContext from "../../assets/context/myContext";
import TaskCard from "./TaskCard";

const Taskslist = () => {
    const { todoData } = useContext(myContext);

    return (
        <tbody>
            {todoData.map((element) => (
                <TaskCard key={element.id} data={element}/>
            ))}
        </tbody>
    );
}

export default Taskslist;
