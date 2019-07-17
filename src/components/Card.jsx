import React from "react";

const Card = props => {
  const character = { ...props.character };

  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-5'>
          <img
            style={{ maxHeight: "300px", maxWidth: "300px" }}
            src={character && character.image}
            className='card-img'
            alt='loading...'
          />
        </div>
        <div className='col-md-7 p-3'>
          <h5 className='card-title d-flex justify-content-between mb-0'>
            <u>{character && character.name}</u>
            <span className='badge badge-pill badge-info'>{character.id}</span>
          </h5>
          {delete character.image &&
            delete character.name &&
            delete character.id}
          <div
            className='card-body'
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
            <div className='card-text'>
              <ul className='list-group list-group-flush'>
                {character &&
                  Object.keys(character).map(key => (
                    <li key={key} className='list-group-item'>
                      {key}: {character[key].name || character[key]}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
