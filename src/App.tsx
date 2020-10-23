import React from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoFOrm";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <TodoForm/>
            </div>
        </>
    )
}

export default App;
