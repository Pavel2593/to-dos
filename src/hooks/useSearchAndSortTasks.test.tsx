import React from 'react'
import { render, renderHook, screen } from '@testing-library/react'
import { useSortedTasks, useSearchAndSortTasks } from './useSearchAndSortTasks'

const tasks = [
    { id: 0, title: "б", description: 'в', completed: true },
    { id: 1, title: "а", description: 'г', completed: false },
    { id: 2, title: "г", description: 'а', completed: true },
    { id: 3, title: "в", description: 'б', completed: false }
]

describe('Сортировка массива', () => {
    test('Сортировка по заголовку', ()=> {
        const { result } = renderHook(() => useSortedTasks(tasks, 'title'))
        expect(result.current).toEqual([
            { id: 1, title: "а", description: 'г', completed: false },
            { id: 0, title: "б", description: 'в', completed: true },
            { id: 3, title: "в", description: 'б', completed: false },
            { id: 2, title: "г", description: 'а', completed: true },
        ])
    })

    test('Сортировка по заголовку', () => {
        const { result } = renderHook(() => useSortedTasks(tasks, 'description'))
        expect(result.current).toEqual([
            { id: 2, title: "г", description: 'а', completed: true },
            { id: 3, title: "в", description: 'б', completed: false },
            { id: 0, title: "б", description: 'в', completed: true },
            { id: 1, title: "а", description: 'г', completed: false },
        ])
    })

    test('Список всех задач', () => {
        const { result } = renderHook(() => useSearchAndSortTasks(tasks, '', '', 'all'))
        expect(result.current).toEqual(tasks)
    })

    test('Выборка по готовым задачам', () => {
        const { result } = renderHook(() => useSearchAndSortTasks(tasks, '', '', 'work'))
        expect(result.current).toEqual([
            { id: 1, title: "а", description: 'г', completed: false },
            { id: 3, title: "в", description: 'б', completed: false }
        ])
    })

    test('Выборка по не готовым задачам', () => {
        const { result } = renderHook(() => useSearchAndSortTasks(tasks, 'title', '', 'completed'))
        expect(result.current).toEqual([
            { id: 0, title: "б", description: 'в', completed: true },
            { id: 2, title: "г", description: 'а', completed: true },
        ])
    })

})