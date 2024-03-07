const [todo, setTodo] = useState([
    {
      title: "title1", des: "des1"
    },
    {
      title: "title2", des: "des2"
    },
  ])
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")

  return (
    <div >
      <input type='text' name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
      <input type='text' name="des" value={des} onChange={(e) => { setDes(e.target.value) }} />
      <button onClick={() => {
        let newTodo = [...todo, 
               , { title, des }]
        setTodo(newTodo)
      }}>Save</button>
      <div>
        {
          todo.map((v, index) => {
            return <div>
              <p>{v.title}</p>
              <button onClick={() => setTodo(todo.filter((v, i) => i != index))}>del</button>
              <button onClick={() => { setTitle(v.title); setDes(v.des) }}>edit</button>
            </div>
          })
        }
      </div>
    </div>
  )