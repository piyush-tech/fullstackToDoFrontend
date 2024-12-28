import axios from 'axios';

const baseUrl = "https://todo-app-314q.onrender.com"

const getAllToDo = (setToDo) =>{
    axios.get(baseUrl)
    .then((data)=>{
        setToDo(data.data)
    })
    .catch((err)=> console.log(err))
}

const addTodo = (text,setText,setToDo) =>{
    axios.post(`${baseUrl}/save`,{text})
    .then(()=>{
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) =>{
    axios.post(`${baseUrl}/update`,{_id:toDoId,text})
    .then(()=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

const deleteToDo = (toDoId,setToDo) =>{
    axios.post(`${baseUrl}/delete`,{_id:toDoId})
    .then(()=>{
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

export {getAllToDo,addTodo,updateToDo,deleteToDo}
