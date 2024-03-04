import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import { Task } from './Task'

function App(): JSX.Element {
  const [tarefas, setTarefas] = useState<Task[]>([])
  return (
    <>
      <Form setTarefas={setTarefas} tarefas={tarefas} />
      <List tarefas={tarefas} />
    </>
  )
}

export default App
