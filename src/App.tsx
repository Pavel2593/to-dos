import { useState } from 'react';
import { IFilter, ITask } from './types/types';
import TaskAddForm from './Components/TaskAddForm/TaskAddForm';
import TaskList from './Components/TaskList/TaskList';
import TaskFilter from './Components/TaskFilter/TaskFilter';
import { DefaultPopup, FloodedButton } from './Components/UI';
import { useSearchAndSortTasks } from './hooks/useSearchAndSortTasks';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: 0,
            title: "Разобраться с typescript",
            description: 'Использовать в проекте',
            completed: true
        },
        {
            id: 1,
            title: "Разобраться с тестом",
            description: 'Покрыть to dos" тестами',
            completed: false
        }
    ])
    const [showTaskFormPopup, setShowTaskFormPopup] = useState(false)
    const [filterObject, setFilterObject] = useState<IFilter>({ sort: '', search: '', showTasks: '' })
    const searchedAndSortPosts = useSearchAndSortTasks(tasks, filterObject.sort, filterObject.search, filterObject.showTasks);

    const addTask = (newTask: ITask) => {
        setTasks([...tasks, newTask])
        setShowTaskFormPopup(false)
    }

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(
            task => task.id !== taskId
        ))
    }

    const changeShowTasks = (value: string) => {
        setFilterObject({ ...filterObject, showTasks: value })
    }

    const changeCompleted = (taskId: number) => {
        setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
    }

    return (
        <div className='page'>
            <div className='header'>
                <TaskFilter
                    filterObject={filterObject}
                    setFilterObject={setFilterObject}
                />
                <FloodedButton onClick={() => setShowTaskFormPopup(true)}>Добавить задачу</FloodedButton>
                {showTaskFormPopup &&
                    <DefaultPopup
                        title="Создать задачу"
                        show={showTaskFormPopup}
                        setShow={setShowTaskFormPopup}
                    >
                        <TaskAddForm
                            addTask={addTask}
                        />
                    </DefaultPopup>
                }
            </div>
            <TaskList
                tasks={searchedAndSortPosts}
                removeTask={removeTask}
                changeCompleted={changeCompleted}
            />
            <div className='footer'>
                <p className='filterValue'
                    onClick={()=> {
                        changeShowTasks('all')
                    }}
                >
                    Все задачи
                </p>
                <p className='filterValue'
                    onClick={()=> {
                        changeShowTasks('completed')
                    }}
                >
                    Выполненные
                </p>
                <p className='filterValue'
                    onClick={()=> {
                        changeShowTasks('work')
                    }}
                >
                    В работе
                </p>
            </div>
        </div>
    )
};

export default App;
