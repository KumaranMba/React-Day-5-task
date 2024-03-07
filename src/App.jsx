import React, { useState } from "react";
function App(){
  const [todo,setTodo] =useState([{id:1,
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
      }])
      const[title,setTitle] = useState('');
      const[description,setDescription]= useState('');
     
  return(
    <div className="container">
      <div>
      <h2 className="text-center py-5">My todo</h2>
      </div>
      <form method="get">
        <div className="row">
        <div className="col-5">
          <input type="text" className="form-control" placeholder="Todo Name" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
           <div className="col-5">
           <input type="text" className="form-control" placeholder="Todo Description" name="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
         </div>
         <div className="col-2">
         <button type="submit" className="btn btn-primary" onClick={()=>{
         let newTodo = [...todo,{title,description}];
        setTodo(newTodo);
         }}>AddTodo</button>
         </div>
      </div>
    </form>


    <section className="py-5">
      <div className="container border">
        <div className="row">
          <div className="col d-flex">
            <h5>MyTodos
            <form name ="status" className="d-inline">
            <label htmlFor="statusFilter">Status Filter:
              <select name ="status">
              <option value={"All"} >All</option>
              <option value={"completed"}>completed</option>
              <option value={" not completed"}> not completed</option>
              </select>
              </label>
            </form>
            </h5>
          </div>
          

        </div>
       
        <div className="">
          {todo.map((value,index)=>{
           return <div key={value.name}>
            <div className="row card" style={{width:"18rem"}}>
            <p className="m-2">Name:{value.name}</p>
            <p className="m-2">Description:{value.Description}</p>
            <label className="m-2" htmlFor="status">Status
           <select name ="status" defaultValue="not completed">
           <option value="completed">completed</option>
           <option value="not completed"> not completed</option>
           </select>
           </label>
           <div className="mt-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
           <button type="button" className="btn btn-success" onClick={()=> {setTitle(value.title),setDescription(value.description)}}>Edit</button>
           <button type="button" className="btn btn-success" onClick={()=>{setTodo(todo.filter((v,i)=> i != index))}}>Delete</button>
            </div>
            </div>
            </div>
          })
           
          }
        </div>

      </div>
    </section>




    </div>
    
  )
}

export default App;