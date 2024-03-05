import { Button, Card } from '@nextui-org/react'
import { Task } from '@renderer/Task'
import { ReactElement } from 'react'

type ListProps = {
  tarefas: Task[]
}

function List({ tarefas }: ListProps): ReactElement {
  return (
    <>
      <h3>Lista de tarefas</h3>
     
        {tarefas.length > 0 &&
          tarefas.map((tarefa) => (
            <Card key={tarefa.title}>
              <strong>{tarefa.title}</strong>
              <Button color='danger' isIconOnly>excluir</Button>
              <Button color='primary' isIconOnly>editar</Button>
              <Button color='success' isIconOnly>completar</Button>
            </Card>
          ))}
      
    </>
  )
}

export default List
