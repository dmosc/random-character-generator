import React from "react";

const Button = ({ onClick, client }) => {
  return (
    <button
      onClick={() => onClick(client)}
      type='button'
      className='btn btn-info'
    >
      NEW CHARACTER
    </button>
  );
};

export default Button;
