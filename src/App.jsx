import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addTodo, getAllToDo,updateToDo,deleteToDo } from './utils/HanldeAPi'

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(() => {
    getAllToDo(setToDo)
  }, [setToDo])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add ToDo...' value={text} onChange={(e) => setText(e.target.value)} />
          <div className='add' onClick={isUpdating ? () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating) : () => addTodo(text, setText, setToDo)}>{isUpdating ? "Update" : "Add"}</div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return <ToDo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteTodo={()=>deleteToDo(item._id,setToDo)}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
