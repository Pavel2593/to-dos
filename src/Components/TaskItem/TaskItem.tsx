import { ITask } from '../../types/types';
import { BorderButton, FloodedButton } from '../UI';
import cl from './TaskItem.module.scss'

interface ITaskItemProps {
    task: ITask,
    children?: React.ReactNode
    removeTask: (deletedTaskId: number) => void
    changeCompleted: (taskId: number) => void
}

const TaskItem: React.FunctionComponent<ITaskItemProps> = ({ removeTask, changeCompleted, task }) => {
    const isCompleted: boolean = task.completed

    return (
        <div className={cl.taskItem}>
            <div className={[cl.taskItemTitle, 'mb-20'].join(' ')}>
                {isCompleted &&
                    <div className={[cl.taskItemChekcComplited, 'mr-20'].join(' ')}>Выполенено</div>
                }
                <h2>{task.id}) {task.title}</h2>
            </div>
            <div className='mb-40'>
                <p>{task.description}</p>
            </div>
            <div className={cl.taskItemRight}>
                <FloodedButton
                    className='mr-20'
                    onClick={() => { changeCompleted(task.id) }}
                >
                    {isCompleted ? 'Вернуть в работу' : 'Завершить'}
                </FloodedButton>
                <BorderButton
                    onClick={() => { removeTask(task.id) }}
                >
                    Удалить
                </BorderButton>
            </div>
        </div>
    )
};

export default TaskItem;
