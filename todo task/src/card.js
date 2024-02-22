
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export function Cards({ name, description, status, onDelete, onStatusChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    //TO  Save the edited name and description
    setIsEditing(false);
  };

  const handleCancel = () => {
    //TO  Reset the edited name and description
    setEditedName(name);
    setEditedDescription(description);
    setIsEditing(false);
  };

  return (
    <div className='map'>
      <Card className="Maincard" style={{ width: '20rem' }}>
        <Card.Body>
          {!isEditing ? (
            <>
              <Card.Text id='sta'>
                Name:  {name}
              </Card.Text>
              <Card.Text id='sta'>
                Description: {description}
              </Card.Text>
              <Card.Text id='sta'>
                Status:
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-info" style={{ width: "140px", backgroundColor: "pink", borderColor: "pink" }}>
                    {status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onStatusChange("Completed")}>Completed</Dropdown.Item>
                    <Dropdown.Item onClick={() => onStatusChange("Not Completed")}>Not completed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Text>
            </>
          ) : (
            <><div className='editname'>
             <label>Name: </label> <Form.Control type="text" placeholder="Enter name" value={editedName} onChange={(e) => setEditedName(e.target.value)} /></div>
             <div className='editname'>
             <label>Description: </label><Form.Control type="text" placeholder="Enter description" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} /></div>
            </>
          )}
          <div className='btngrp'>
            {!isEditing ? (
              <Button className='btn' variant="success" style={{ width: "60px" }} onClick={() => setIsEditing(true)}>Edit</Button>
            ) : (
              <div className='edit'>
                <Button className='btn' variant="success" style={{ width: "60px" }} onClick={handleSave}>Save</Button>
                <Button className='btn' variant="danger" style={{ width: "80px" }} onClick={handleCancel}>Cancel</Button>
              </div>
            )}
            <Button className='btn-org' variant="success" style={{ width: "80px" }} onClick={onDelete}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

