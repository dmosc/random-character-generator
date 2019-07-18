import React from "react";
import logo from "./utils/images/logo.png";

const CardHolder = () => {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-5'>
          <img
            style={{ maxHeight: "300px", maxWidth: "300px" }}
            src={logo && logo}
            className='card-img p-4 my-5'
            alt='loading...'
          />
        </div>
        <div className='col-md-7 p-3'>
          <h5 className='card-title d-flex justify-content-between mb-0'>
            <u>The Rick and Morty Encyclopædia</u>
          </h5>
          <div
            className='card-body'
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
            <div className='card-text'>
              Have fun trying to find the 493 characters available from the R&M
              verse in this amazing and informative web app powered by the Rick
              and Morty API. Click on the button to get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHolder;
