import React, { useState } from 'react'
import FloodedButton from './../UI/FloodedButton/FloodedButton'
import DefaultInput from './../UI/DefaultInput/DefaultInput'
import cl from './TaskAddForm.module.scss'
import { ITask } from '../../types/types'

interface IAppProps {
    addTask: (newTask: ITask) => void
}

const App: React.FunctionComponent<IAppProps> = ({ addTask }) => {
    const [task, setTask] = useState<ITask>({
        id: Date.now(),
        title: '',
        description: '',
        completed: false
    })

    const createPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTask(task)
        setTask({
            id: Date.now(),
            title: '',
            description: '',
            completed: false
        })
    }

    return (
        <form className={cl.taskForm}>
            <DefaultInput
                className={cl.taskFormItem}
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
                placeholder="Заголовок задачи"
            />
            <DefaultInput
                className={cl.taskFormItem}
                value={task.description}
                onChange={e => setTask({ ...task, description: e.target.value })}
                placeholder="Описание задачи"
            />
            <FloodedButton onClick={createPost}>
                Добавить
            </FloodedButton>
        </form>
    )
};

export default App;
