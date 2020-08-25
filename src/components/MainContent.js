import React from 'react';
import ToDoItem from './ToDoItem';

function MainContent(){
    return(
        <div>
            <div className="rowContent">
                
                <h3>Translator test (sp/jp):</h3>
                <ul>
                    <li>Spanish: Hola mundo!</li>
                    <li>Japanese: Sekai Konichiwa!</li>
                </ul>
                
            </div>
            <div className="ToDoList">
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </div>
        </div>
    );
}

export default MainContent;