import React from "react";

const SeenCards = ({ seen, onClick }) => {
  const characters = [...seen.values()];
  return (
    <ul
      className='list-group'
      style={{ maxHeight: "500px", overflowY: "scroll" }}
    >
      {characters.map(c => (
        <li
          key={c._id + Math.random()}
          className='list-group-item d-flex justify-content-between align-items-center'
          style={{ maxHeight: "40px", cursor: "pointer" }}
          onClick={() => onClick(c._id)}
        >
          <img src={c.image} alt='img' style={{ maxHeight: "40px" }} />
          {c.name}
          <span className='badge badge-info badge-pill'>
            {c._id.slice(c._id.length - 3)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SeenCards;
