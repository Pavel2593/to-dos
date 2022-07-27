import React from 'react'
import { IFilter } from '../../types/types';
import DefaultInput from '../UI/DefaultInput/DefaultInput';
import DefaultSelect from '../UI/DefaultSelect/DefaultSelect';
import cl from './TaskFilter.module.scss'

interface IAppProps {
    filterObject: IFilter
    setFilterObject: (filterObject: IFilter) => void
}

const App: React.FunctionComponent<IAppProps> = ({ filterObject, setFilterObject }) => {
    const changeSearchInput = (value: string) => {
        setFilterObject({ ...filterObject, search: value })
    }

    const changeSortSelect = (value: string) => {
        setFilterObject({ ...filterObject, sort: value })
    }

    return (
        <div className={cl.taskFilter}>
            <DefaultInput
                placeholder='Поиск...'
                className={cl.taskFilterItem}
                value={filterObject.search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    changeSearchInput(e.target.value)
                }}
            />
            <DefaultSelect
                className={cl.taskFilterItem}
                returnValueFunction={changeSortSelect}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'description', name: 'По описанию' }
                ]}
            />
        </div>
    )
};

export default App;
