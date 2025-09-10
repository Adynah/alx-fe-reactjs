import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Write Tests")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(addButton);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
        expect(input.value).toBe("");
    });

    test("toggles a todo's completed status", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");

        expect(todo).not.toHaveClass("line-through");

        fireEvent.click(todo);
        expect(todo).toHaveClass("line-through");

        fireEvent.click(todo);
        expect(todo).not.toHaveClass("line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const todo = screen.getByText("Write Tests");
        const deleteButton = screen.getAllByText("Delete")[1];

        fireEvent.click(deleteButton);
        expect(todo).not.toBeInTheDocument();
    });
});
