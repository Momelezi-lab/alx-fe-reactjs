import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Initial render test
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  // Test adding todos
  test('adds a new todo', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    await userEvent.type(input, 'Test Todo');
    await userEvent.click(addButton);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(input).toHaveValue('');  // Clears after add
  });

  // Test toggling todos
  test('toggles a todo completion', async () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const initialItems = screen.getAllByRole('listitem');

    await userEvent.click(todoText);

    expect(todoText).toHaveStyle({ textDecoration: 'line-through' });
    // Check list length unchanged
    expect(screen.getAllByRole('listitem')).toHaveLength(initialItems.length);
  });

  // Test deleting todos
  test('deletes a todo', async () => {
    render(<TodoList />);
    const deleteButton = screen.getByRole('button', { name: /delete/i });  // First delete button
    const initialCount = screen.getAllByRole('listitem').length;

    await userEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();  // Assuming first todo deleted
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount - 1);
  });
});