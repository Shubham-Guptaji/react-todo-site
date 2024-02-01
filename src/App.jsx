import { useEffect, useState } from 'react';
import myContext from './assets/context/myContext';
import './App.css';
import Home from './Layout/Home';
import ListedTask from './components/ListedTask';
import AddTask from './components/AddTask';

function App() {
    const [todoData,setTodoData] = useState([{id : 1, task : 'Doing Coding Practice', isCompleted: false},{id: 2, task: "DSA", isCompleted: true}]);

    useEffect(() => {
        const storedData = localStorage.getItem('todoData');
        if (storedData) {
            setTodoData(JSON.parse(storedData));
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }, [todoData]);

    return (
        <>
            <myContext.Provider value={{todoData, setTodoData}}>
                <Home>
                    <AddTask />
                    <ListedTask />
                </Home>
            </myContext.Provider>
        </>
    )
}

export default App
