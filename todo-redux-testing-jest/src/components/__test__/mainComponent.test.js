import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "../../todosSlice";
import { configureStore } from "@reduxjs/toolkit";
import MainComponent from "../mainComponent";
import "@testing-library/jest-dom";

const renderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      todos: reducer,
    },
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("todo web", () => {
  it("should display the header", async () => {
    const view = renderWithRedux(<MainComponent />);
    expect(view.getByTestId("todo-header")).toBeInTheDocument();
  });
  it("should add and delete todo", async () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<MainComponent />);
    const todoInput = getByTestId("add-todo-input");
    const addTodoButton = getByTestId("add-todo-button");
    expect(todoInput).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    fireEvent.change(todoInput, {
      target: {
        value: "task 1",
      },
    });
    fireEvent.click(addTodoButton);
    expect(getByTestId("single-todo").textContent).toContain("task 1");
    expect(getByTestId("delete-button")).toBeInTheDocument();
    fireEvent.click(getByTestId("delete-button"));
    expect(queryByTestId("single-todo")).toBeNull();
  });
  it("should update todo", async () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<MainComponent />);
    const todoInput = getByTestId("add-todo-input");
    const addTodoButton = getByTestId("add-todo-button");
    expect(todoInput).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    fireEvent.change(todoInput, {
      target: {
        value: "task 1",
      },
    });
    fireEvent.click(addTodoButton);
    const updateButton = getByTestId("update-button");
    await waitFor(async () => {
      expect(getByTestId("single-todo").textContent).toContain("task 1");
    });
    fireEvent.click(updateButton);
    expect(getByTestId("update-input")).toBeInTheDocument();
    fireEvent.change(getByTestId("update-input"), {
      target: {
        value: "task updated",
      },
    });
    fireEvent.submit(getByTestId("update-form"));
    expect(queryByTestId("update-input")).not.toBeInTheDocument();
    await waitFor(async () => {
      expect(getByTestId("single-todo").textContent).toContain("task updated");
    });
  });
  it("should filter todos", async () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<MainComponent />);
    const todoInput = getByTestId("add-todo-input");
    const addTodoButton = getByTestId("add-todo-button");
    expect(todoInput).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    fireEvent.change(todoInput, {
      target: {
        value: "task 1",
      },
    });
    fireEvent.click(addTodoButton);
    expect(getByTestId("single-todo").textContent).toContain("task 1");
    expect(getByTestId("incomplete-header")).toBeInTheDocument();
    expect(getByTestId("change-state-button-done")).toBeInTheDocument();
    fireEvent.click(getByTestId("change-state-button-done"));
    expect(getByTestId("single-todo").textContent).toContain("task 1");
    await waitFor(async () => {
      await expect(getByTestId("complete-header")).toBeInTheDocument();
      await expect(queryByTestId("incomplete-header")).not.toBeInTheDocument();
    });
    fireEvent.change(todoInput, {
      target: {
        value: "task 2",
      },
    });
    fireEvent.click(addTodoButton);
    await waitFor(async () => {
      await expect(getByTestId("complete-header")).toBeInTheDocument();
      await expect(queryByTestId("incomplete-header")).toBeInTheDocument();
    });
    fireEvent.change(getByTestId("filter"), { target: { value: "complete" } });
    await waitFor(async () => {
      await expect(getByTestId("complete-header")).toBeInTheDocument();
      await expect(queryByTestId("incomplete-header")).not.toBeInTheDocument();
      await expect(getByTestId("single-todo").textContent).toContain("task 1");
      await expect(queryByTestId("single-todo").textContent).not.toContain(
        "task 2"
      );
    });
    fireEvent.change(getByTestId("filter"), {
      target: { value: "incomplete" },
    });
    await waitFor(async () => {
      await expect(queryByTestId("complete-header")).not.toBeInTheDocument();
      await expect(getByTestId("incomplete-header")).toBeInTheDocument();
      await expect(queryByTestId("single-todo").textContent).not.toContain(
        "task 1"
      );
      await expect(getByTestId("single-todo").textContent).toContain("task 2");
    });
  });
});
