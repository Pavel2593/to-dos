import { render, screen } from '@testing-library/react'
import TaskItem from './TaskItem';
import { completedTask, workedTask } from './../../testConsts/testConsts'

describe('TaskItem Component', () => {
    test('Проверка иконки выполенено', () => {
        render(<TaskItem task={completedTask} removeTask={()=>{}} changeCompleted={()=>{}}/>);
        const textIcon = screen.getByText(/Выполенено/i);
        expect(textIcon).toBeInTheDocument();
    });

    test('Проверка проверка отсутсвия иконки выполенено', () => {
        render(<TaskItem task={workedTask} removeTask={() => { }} changeCompleted={() => { }} />);
        const textIcon = screen.queryByText(/Выполенено/i);
        expect(textIcon).not.toBeInTheDocument()
    });
})