import React, { useState } from "react";
function App(){
    {/*Array of list content */}
  const [todo,setTodo] =useState([{id:1,
    title:"office Task - 1",
    description:"This is the description for My First Task",
    status:'notComp'
      },{
    id:2,
    title:"office Task - 2",
    description:"This is the description for My Second Task",
    status:'notComp'
      },{
      id:3,
      title:"office Task - 3",
      description:"This is the description for My Third Task",
      status:'notComp'
      }]);
     
      const[title,setTitle] = useState('');                                    {/* state for title to create newTitle  */}
      const[description,setDescription]= useState('');                         {/* state for description to create newDescription*/}
      const[editIndex,setEditIndex] =useState(-1);                             {/*state for editIndex to  identify which task we are editing*/}
    const[showStatus,setShowStatus] = useState('All');                         {/*state for to describe the initial  showStatus*/}

                                                                               {/*If addTodo button click means the set of code to be executed */}
      const addTodo = () => {                                    
        if(editIndex === -1){
          console.log("New task");
          // let newTodo = [...todo,{title,description}];
          // setTodo(newTodo);
          setTodo((prev)=>[...prev,{id: prev.length + 1,title,description,status:'notComp'}])
          setTitle(' ');
          setDescription(' ');
        }else{
          console.log("Editing data",editIndex);
          const updatedTodos = [...todo];
          updatedTodos[editIndex].title= title;
          updatedTodos[editIndex].description= description;
          setTodo(updatedTodos);
          setEditIndex(-1);
          setTitle('');
          setDescription('');

        }
      };
                                                                                               {/* Edit functionlity */}
      const editTask = (index) =>{  
        setEditIndex(index);
        console.log(todo[index]);
       setTitle(todo[index].title);
       setDescription(todo[index].description);
      }

                                                                                               {/* updateStatus functionlity*/}
    const updateStatus = (index, newStatus) => {
        console.log(newStatus);
      const updatedTodos = [...todo];
      updatedTodos[index].status = newStatus;
      setTodo(updatedTodos);
      console.log(updatedTodos);
    };
                                                                                               {/*Conditional rendering based on the value showStatus*/}
    const filteredTodos = showStatus === 'All' ? todo : todo.filter(item => item.status === showStatus);




  return(
    <div className="container">
      <div>
      <h2 className="text-center py-5" style={{color:"#13AD89"}}>My todo</h2>
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
         <button type="button" className="btn btn-success" style={{color:"white"}} onClick={addTodo}>AddTodo</button>
         </div>
      </div>
    </form>


    <section className="py-5">
      <div className="container">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col d-flex w-100 justify-content-between">
            <h5>MyTodos</h5>
            <form name ="status">
            <label htmlFor="statusFilter">Status Filter:
              <select name ="status" 
              id="statusFilter"
              value={showStatus} 
               onChange={e=> setShowStatus(e.target.value)}>
              <option value="All" >All</option>
              <option value="comp">completed</option>
              <option value="notComp"> not completed</option>
              </select>
              </label>
            </form>
          </div>
        </div>
       
        <div className="d-flex flex-wrap justify-content-between d-grid row-cols-xl-3">

          {filteredTodos.map((value,index)=>{
           
           return <div key={index}>
            <div className="row mt-5 card" style={{width:"18rem",backgroundColor:"#CCF5D3"}}>
            <p className="m-2"  >Name:{value.title}</p>
            <p className="m-2" >Description:{value.description}</p>
            <label className="m-2" htmlFor={`status ${index}`}>Status
           <select name ={`status ${index}`} 
           id={`status ${index}`} 
           value={value.status} 
           onChange={e => updateStatus(index, e.target.value)}>
           <option  style={{backgroundColor:"#FF7F81"}} value="notComp"> Not Completed</option>
           <option  style={{backgroundColor:"#13AD89"}} value="comp">Completed</option>
           </select>
           </label>
           <div className="mt-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
           <button type="button" className="btn btn-success" onClick={()=>editTask(index)}>Edit</button>
           <button type="button" className="btn btn-success" style={{backgroundColor:"#D05E1F"}} onClick={()=>{setTodo(todo.filter((v,i)=> i != index))}}>Delete</button>
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
