import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    it("renders initial todo items", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Write Tests")).toBeInTheDocument();
    });

    it("allows adding a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(addButton);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
        expect(input.value).toBe("");
    });

    it("toggles a todo's completed state when clicked", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");

        expect(todo).not.toHaveClass("line-through");

        fireEvent.click(todo);
        expect(todo).toHaveClass("line-through");

        fireEvent.click(todo);
        expect(todo).not.toHaveClass("line-through");
    });

    it("deletes a todo when delete button is clicked", () => {
        render(<TodoList />);
        const todo = screen.getByText("Write Tests");
        const deleteButtons = screen.getAllByText("Delete");
        const deleteButton = deleteButtons[1]; // second todo

        fireEvent.click(deleteButton);
        expect(todo).not.toBeInTheDocument();
    });
});

