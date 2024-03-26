import { Button, Input } from '@nextui-org/react'
import API from '@renderer/utils/API'

import { ReactElement, useState } from 'react'

type FormProps = {
  reload: () => Promise<void>
}

function Form({ reload }: FormProps): ReactElement {
  const [tarefa, setTarefa] = useState<string>('')

  async function addTarefa(): Promise<void> {
    const {data, error} = await API.post('/tasks',{ status: 'ACTIVE', title: tarefa})
    console.log({data, error})
    setTarefa('')
    reload()
  }

  return (
    <>
      <label htmlFor='tarefa'>Nome da Tarefa</label>
      <Input id='tarefa' type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} name="tarefa" />
      <Button color='primary' onClick={() => addTarefa()}>Salvar tarefa</Button>
    </>
  )
}

export default Form
