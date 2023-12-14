import React from "react";

const List = ({ text, className }) => {
  return (
    <li>
      <a className={` ${className}`} href="#">
        {text}
      </a>
    </li>
  );
};

export default List;
