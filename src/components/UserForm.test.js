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

test("it calls onUserAdd when the form is submitted", async () => {
  const argList = [];
  const callBack = (...args) => {
    argList.push(args);
  };

  // Render the component
  render(<UserForm onUserAdd={callBack} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  await act(async () => {
    await user.type(nameInput, "Jane");
    // Simulate typing in an email
    await user.type(emailInput, "Jane@gmail.com");
    // Find the button and click it
    const button = screen.getByRole("button");
    await user.click(button);
  });

  // Assertion to make sure "onUserAdd" gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "Jane", email: "Jane@gmail.com" });
});
