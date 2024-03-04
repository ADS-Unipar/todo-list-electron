import { Task } from '@renderer/Task'
import { ReactElement } from 'react'

type ListProps = {
  tarefas: Task[]
}

function List({ tarefas }: ListProps): ReactElement {
  return (
    <>
      <h3>Lista de tarefas</h3>

      <ul>
        {tarefas.length > 0 &&
          tarefas.map((tarefa) => (
            <li key={tarefa.title}>
              <strong>{tarefa.title}</strong>
              <button>excluir</button>
              <button>editar</button>
              <button>completar</button>
            </li>
          ))}
      </ul>
    </>
  )
}

export default List
