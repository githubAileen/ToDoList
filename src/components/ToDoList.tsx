// Importing required modules from react-bootstrap and react
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function ToDoList() {
  // Define the type of the items in the to-do list as an interface
  type Item = {
    id: number;
    text: string;
  };

  // Set initial state for the to-do list and input value using useState hook
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  //Handlers for input changes, adding new to-dos and deleting to-dos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  const handleAddButtonClick = () => {
    if (inputValue !== "") {
      const newItem: Item = { id: Date.now(), text: inputValue };
      setTodos([...todos, newItem]);
      setInputValue("");
    }
  };

  const handleDelete = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Render the to-do list with an input field and buttons for adding and deleting items
  return (
    <>
      <Container className="container-fluid bg-dark rounded m-3 p-4">
        <h1 className="text-center text-white pb-3">
          What is the schedule today?
        </h1>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Row>
              <Col xs={9}>
                <input
                  type="text"
                  className="form-control"
                  value={inputValue}
                  onKeyDown={handleInputKeyDown}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs={2}>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleAddButtonClick}
                >
                  Add
                </button>
              </Col>
              <Row className="pe-4 pt-3">
                <Col>
                  <ul className="list-group">
                    {/* Map through the items in the to-do list and display them with a delete button */}
                    {todos.map((todo) => (
                      <li className="list-group-item d-flex align-middle align-items-start">
                        <div className="ms-2 me-auto">{todo.text}</div>
                        <button
                          className="badge bg-danger btn text-white bt-sm"
                          onClick={() => handleDelete(todo.id)}
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

// Export the ToDoList component as the default export
export default ToDoList;
