import Dropdown from "react-bootstrap/Dropdown";

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Courses</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Leaderboard</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
