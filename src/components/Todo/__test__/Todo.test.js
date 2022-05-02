import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (inputElement, buttonElement, tasks) => {
  if (tasks.length) {
    tasks.forEach((task) => {
      fireEvent.change(inputElement, {
        target: {
          value: task,
        },
      });
      fireEvent.click(buttonElement);
    });
  } else {
    fireEvent.change(inputElement, {
      target: {
        value: tasks,
      },
    });
    fireEvent.click(buttonElement);
  }
};

describe("Todo", () => {
  it("Should render the Todo text result", async () => {
    render(<MockTodo />);
    const TASK = "Go to supermarket";
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
      name: /Add/i,
    });
    fireEvent.change(inputElement, {
      target: {
        value: TASK,
      },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(TASK);
    expect(divElement).toBeInTheDocument();
  });
  it("Should render 3 Todo's text result", async () => {
    render(<MockTodo />);
    const TASKS = [
      "Go to supermarket",
      "Go to the Petshop",
      "Go to cousin dinner",
    ];
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
      name: /Add/i,
    });
    addTask(inputElement, buttonElement, TASKS);

    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });
  it("Taks should not have completed class when initially rendered", async () => {
    render(<MockTodo />);
    const TASKS = ["Go to supermarket"];
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
      name: /Add/i,
    });
    addTask(inputElement, buttonElement, TASKS);

    const divElement = screen.getByText("Go to supermarket");
    expect(divElement).not.toHaveClass("todo-item-active");
  });
  it("Tasks should have completed class when initially rendered", async () => {
    render(<MockTodo />);
    const TASKS = ["Go to supermarket"];
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
      name: /Add/i,
    });
    addTask(inputElement, buttonElement, TASKS);

    const divElement = screen.getByText("Go to supermarket");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
