import { Task } from '@renderer/Task'
import { ReactElement, useState } from 'react'

type FormProps = {
  setTarefas: React.Dispatch<React.SetStateAction<Task[]>>
  tarefas: Task[]
}

function Form({ setTarefas, tarefas }: FormProps): ReactElement {
  const [tarefa, setTarefa] = useState<string>('')

  function addTarefa(): void {
    if (tarefa.length) {
      const newTarefas = [...tarefas]
      newTarefas.unshift({ title: tarefa, status: 'ACTIVE' })
      setTarefas(newTarefas)
    }
  }

  return (
    <>
      <label>Nome da Tarefa</label>
      <input type="text" onChange={(e) => setTarefa(e.target.value)} name="title" />
      <button onClick={() => addTarefa()}>Salvar tarefa</button>
    </>
  )
}

export default Form
