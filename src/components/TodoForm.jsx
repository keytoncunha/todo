import {useState} from 'react'

function TodoForm({addTodo}) {
  const [value,setValue]=useState("")
  const [category,setCategory]=useState("")
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!value || !category) return;
    // ADD TODO
    addTodo(value,category)
    setValue("")
    setCategory("")
  }

  return (
    <div  className='todo_form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handlesubmit}>
            <input type="text" id="" placeholder='Digite o título' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Familia">Familia</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm