import { useState } from 'react';
import myContext from './assets/context/myContext';
import './App.css';
import Home from './Layout/home';
import ListedTask from './components/ListedTask';
import AddTask from './components/AddTask';

function App() {
    const [todoData,setTodoData] = useState('Doing Coding Practice')
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
