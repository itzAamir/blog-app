import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComp = ({ onThemeChange }) => {
   return (
      <Dropdown>
         <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="mb-1"
         >
            Select Theme
         </Dropdown.Toggle>

         <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item onClick={(e) => onThemeChange(e)}>
               Light Mode
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => onThemeChange(e)}>
               Dark Mode
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};

export default DropdownComp;
