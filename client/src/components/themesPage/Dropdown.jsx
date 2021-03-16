import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComp = ({ onThemeChange }) => {
   return (
      <Dropdown>
         <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Select Theme
         </Dropdown.Toggle>

         <Dropdown.Menu>
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
