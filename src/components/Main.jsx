import React, { useState } from 'react';
import { todosService }
// import { useHistory } from 'react-router-dom';

function Main(props) {
        // const nesto = useHistory();
        // debugger

        const [todos, setTodos] = useState([]);

        return (
            <div>
                <h1>Main</h1>
            </div>
        );
    }

async function getTodos(userId) {

}

export default Main;