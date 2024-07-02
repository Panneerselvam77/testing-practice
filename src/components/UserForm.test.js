import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import { act } from "react";

test("it show two inputs and a button", () => {
  // Rener the component
  //   render(<UserForm />);
  act(() => {
    render(<UserForm />);
  });

  // manipulate the component or find an element in it

  const inputs = screen.getAllByRole("textbox");
  const buttons = screen.getByRole("button");

  // Assetion - make sure the component is doing
  // What we expect it to do
  expect(inputs).toHaveLength(2);
  expect(buttons).toBeInTheDocument();
});
