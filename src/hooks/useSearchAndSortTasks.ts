import { ITask } from './../types/types';
import { useMemo } from 'react';

export const useSortedTasks = (tasks: ITask[], sort: string) => {
    const sortedTasks = useMemo(() => {
        let result: ITask[]
        if (sort) {
            result = [...tasks].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            result = tasks
        }

        return result

    }, [sort, tasks]);

    return sortedTasks
}

export const useSearchAndSortTasks = (tasks: ITask[], sort: string, search: string, showTasks: string) => {
    const sortedTasks = useSortedTasks(tasks, sort)
    const searchedAndSortPosts = useMemo(() => {
        if (showTasks === 'completed') {
            return sortedTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()) && task.completed)
        }
        if (showTasks === 'work') {
            return sortedTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()) && task.completed === false)
        }

        return sortedTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, showTasks, sortedTasks])

    return searchedAndSortPosts
}