import * as React from 'react';
import { ITask } from '../../types/types';
import cl from './TaskList.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from '../TaskItem/TaskItem';

interface ITaskListProps {
    tasks: ITask[]
    children?: React.ReactNode
    removeTask: (deletedTaskId:number) => void
    changeCompleted: (taskId: number) => void
}

const TaskList: React.FunctionComponent<ITaskListProps> = ({ removeTask, changeCompleted, tasks }) => {
    const isListEmpty: boolean = tasks.length === 0
    return (
        <div className={cl.TaskList}>
            {isListEmpty
                ?
                <h1 className={cl.TaskListSubtitle}>Пополните список дел.</h1>
                :
                <TransitionGroup>
                    {
                        tasks.map((task) => (
                            <CSSTransition
                                key={task.id}
                                timeout={300}
                                classNames={{
                                    enter: cl.animationEnter,
                                    enterActive: cl.animationEnterActive,
                                    exit: cl.animationExit,
                                    exitActive: cl.animationExitActive,
                                }}
                            >
                                <TaskItem
                                    key={task.id}
                                    changeCompleted={changeCompleted}
                                    removeTask={removeTask}
                                    task={task}
                                />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            }
        </div>
    )
};

export default TaskList;
