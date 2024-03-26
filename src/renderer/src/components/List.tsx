import { Button, Card } from '@nextui-org/react'
import { Task } from '@renderer/Task'
import API from '@renderer/utils/API'
import { ReactElement } from 'react'

type ListProps = {
  tarefas: Task[],
  reload: () => Promise<void>
}

function List({ tarefas, reload }: ListProps): ReactElement {

  const handlerDelete = async (id:string|number) => {
      if(id){
        const {data, status } = await API.delete(`/tasks/${id}`)
        console.log({data, status})
        reload()
      }
  }

  return (
    <div>
      <h3>Lista de tarefas</h3>
     
        {tarefas.length > 0 &&
          tarefas.map((tarefa) => (
            <Card className='flex flex-row justify-between' key={tarefa.id}>
              
              <strong>{tarefa.title}</strong>
              <div className='flex w-48 flex-row justify-between'>
                <Button onClick={()=>handlerDelete(tarefa.id)} color='danger' isIconOnly>excluir</Button>
                <Button color='primary' isIconOnly>editar</Button>
                <Button color='success' isIconOnly>completar</Button>
              </div>
              
            </Card>
          ))}
      
    </div>
  )
}

export default List
