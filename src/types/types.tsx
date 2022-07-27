export interface ITask {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

export interface IFilter {
    sort: string,
    search: string
    showTasks: string
}
