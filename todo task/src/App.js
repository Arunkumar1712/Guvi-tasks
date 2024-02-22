import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";
import { Cards } from "./card";
import { useState } from "react";

function App() {
  const [name, setName] = useState([""]);
  const handleinputchange = (e) => {
    setName(e.target.value);
  };
  const [be, setBe] = useState([""]);
  const handleInputChange1 = (e) => {
    setBe(e.target.value); // Change from setBe to setBe
  };
  const [todos, settodos] = useState([]);
  const [status, setStatus] = useState("All");

  // function to get  data from user to set in todos and set the data
  const submitData = () => {
    if (name.trim() !== "" && be.trim() !== "") {
      settodos([...todos, { name, be, status: "Not Completed" }]);
      setName(""); // Reset name state to empty string
      setBe(""); // Reset be state to empty string
    } else {
      alert("Please enter both name and description");
    }
  };

  ///function to delete
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    settodos(updatedTodos);
  };
  // function to update the todo after changing the card status
  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    settodos(updatedTodos);
  };
// function to update the status filter
  const handleStatusFilter = (selectedStatus) => {
    setStatus(selectedStatus);
  };
// function to update todos
  const filteredTodos = todos.filter(
    (todo) => status === "All" || todo.status === status
  );

  return (
    <div className="App">
      <header className="App-header">My todo</header>
      <div className="addpart">
        <input
          className="w-25p-3"
          placeholder="Todo Name"
          value={name}
          onChange={handleinputchange}
        ></input>
        <input
          className="w-25p-3"
          placeholder="Todo description"
          value={be}
          onChange={handleInputChange1}
        ></input>
        <Button className="btn-addtodo" variant="success" onClick={submitData}>
          Add Todo
        </Button>
      </div>
      <div className="status">
        <h5>My Todos</h5>
        <div className="drop">
          <h5>Status Filter :</h5>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-info"
              style={{
                width: "140px",
                backgroundColor: "pink",
                borderColor: "pink",
              }}
            >
              {status}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleStatusFilter("All")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusFilter("Completed")}>
                Completed
              </Dropdown.Item>{" "}
              {/* Corrected */}
              <Dropdown.Item
                onClick={() => handleStatusFilter("Not Completed")}
              >
                Not Completed
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="map">
        {filteredTodos.map((todo, index) => (
          <Cards
            key={index}
            name={todo.name}
            description={todo.be}
            status={todo.status}
            onDelete={() => handleDelete(index)}
            onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
