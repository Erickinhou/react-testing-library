import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = (props) => (
  <BrowserRouter>
    <TodoFooter {...props} />
  </BrowserRouter>
);

describe("TodoFooter", () => {
  it("Should render the correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  // it('Should be visible "task" when the number of incomplete tasks is one', async () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText(/1 task left/i);
  //   expect(paragraphElement).toBeVisible();
  // });
  // it('Should contain <p/> tag "task" when the number of incomplete tasks is one', async () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText(/1 task left/i);
  //   expect(paragraphElement).toContainHTML("p");
  // });
  // it('Should have "task" when the number of incomplete tasks is one', async () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByTestId("para");
  //   expect(paragraphElement).toHaveTextContent("1 task left");
  // });

  // it('Should have text content of "task" when the number of incomplete tasks is one', async () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByTestId("para");
  //   expect(paragraphElement.textContent).toBe("1 task left");
  // });
});
