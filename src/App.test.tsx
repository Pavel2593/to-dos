import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Сортировка массива', () => {
  test('проверка placeholder в input поиска', () => {
    render(<App />);
    const searchPlaceholder = screen.getByPlaceholderText('Поиск...');
    expect(searchPlaceholder).toBeInTheDocument();
  });

  test('проверка select', () => {
    render(<App />);
    const selectPlaceholder = screen.getByText(/Сортировка/i);
    expect(selectPlaceholder).toBeInTheDocument();
  });
  
  test('renders learn react link', () => {
    render(<App />);
    const textButton = screen.getByText(/добавить задачу/i);
    expect(textButton).toBeInTheDocument();
  });
})
