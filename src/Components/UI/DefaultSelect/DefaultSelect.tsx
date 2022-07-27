import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import cl from './DefaultSelect.module.scss'

interface IDefaultSelectProps {
    returnValueFunction: (value:string) => void
    defaultValue: string
    className: string
    options: {
        name:string
        value: string
    }[]
}

const DefaultSelect: React.FunctionComponent<IDefaultSelectProps> = ({ returnValueFunction, defaultValue, options, className }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [selectedName, setSelectedName] = useState<string>(defaultValue)

    const selectOption = (value: string, name: string) => {
        setSelectedName(name);
        returnValueFunction(value);
        setShowOptions(false);
    }

    const classesList: string[] = [className];
    if (showOptions) {
        classesList.push(cl.active)
    }

    return (
        <div className={classesList.join(' ')}>
            <div
                className={cl.select}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedName}
            </div>
            <CSSTransition
                in={showOptions}
                timeout={150}
                classNames={{
                    enter: cl.animationEnter,
                    enterActive: cl.animationEnterActive,
                    exit: cl.animationExit,
                    exitActive: cl.animationExitActive,
                }}
                unmountOnExit
            >
                <div className={cl.options}>
                    {
                        options.map((option) => (
                            <div
                                key={option.value}
                                className={cl.option}
                                onClick={() => selectOption(option.value, option.name)}
                            >
                                {option.name}
                            </div>
                        ))
                    }
                </div>
            </CSSTransition>
        </div>
    )
};

export default DefaultSelect;
