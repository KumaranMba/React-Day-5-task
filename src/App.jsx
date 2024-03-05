import React from "react";

function App(){
  return(
    <div className="container">
      <div>
      <h2 className="text-center py-5">My todo</h2>
      </div>
      <form method="get">
        <div className="row">
        <div className="col-4">
          <input type="text" className="form-control" placeholder="Todo Name" name ="tname"/>
          </div>
           <div className="col-5">
           <input type="text" className="form-control" placeholder="Todo Description" name="tDescription" />
         </div>
         <div className="col-3">
         <button type="submit" class="btn btn-primary">AddTodo</button>
         </div>
      </div>
    </form>
    <section className="py-5">
      <div className="container border">
        <div className="row">
          <div className="col">
            <h3>My Todos</h3>
            <form name ="status" className="">
            <label for="statusFilter" >Status Filter:
              <select name ="status"  >
              <option value="All">All</option>
              <option value="completed">completed</option>
              <option value=" not completed"> not completed</option>
              </select>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default App;