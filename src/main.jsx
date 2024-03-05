import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let MyTodos=[{id:1,
              name:"office Task - 1",
              Description:"this is the description for My First Task",
                },{
              id:2,
              name:"office Task - 2",
              Description:"this is the description for My Second Task",
                },{
                id:3,
                name:"office Task - 3",
                Description:"this is the description for My Third Task",
                }]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> );
