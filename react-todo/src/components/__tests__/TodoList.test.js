import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';  // Correct relative path from src/__tests__

describe('TodoList Component', () => {
  // Test 1: Initial render (verifies demo todos displayed)
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  // Test 2: Adding a new todo
  test('adds a new todo', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    await userEvent.type(input, 'New Test Todo');
    fireEvent.submit(input.closest('form'));  // Simulate form submit

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(input).toHaveValue('');  // Input clears after add
  });

  // Test 3: Toggling a todo
  test('toggles a todo completion', async () => {
    render(<TodoList />);
    const todoSpan = screen.getByText('Learn React');
    const initialItems = screen.getAllByRole('listitem');

    fireEvent.click(todoSpan);

    expect(todoSpan).toHaveStyle('text-decoration: line-through');
    expect(screen.getAllByRole('listitem')).toHaveLength(initialItems.length);  // List unchanged
  });

  // Test 4: Deleting a todo
  test('deletes a todo', async () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    const firstDelete = deleteButtons[0];
    const initialCount = screen.getAllByRole('listitem').length;
    const firstTodoText = screen.getByText('Learn React');

    fireEvent.click(firstDelete);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount - 1);
  });
});