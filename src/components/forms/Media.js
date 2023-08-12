import React, { useState } from 'react';
import Menu from './Menu';
import './Media.css';

const Media = () => {
  const [item, setItems] = useState(Menu);

  const imagesPerRow = 5;

  return (
    <>
      <div>
        <h1 className='mt-5 text-center main-heading'>Here we go</h1>
        <div className='menu-tabs container d-flex justify-content-center'>
          <div className='Menu-tab d-flex justify-content-around'>
            <button className='btn btn-warning'>Mardi</button>
            <button className='btn btn-warning'>Gosaikunda</button>
            <button className='btn btn-warning'>Manang</button>
          </div>
        </div>
      </div>

      {/* Main images section */}
      <div className='Menu-items container-fluid mt-5'>
        <div className='row'>
          <div className='column-container col-11 mx-auto'>
            <div className='row my-5'>
              {item.map((elem, index) => {
                const { id, image } = elem;
                const isFirstImageInRow = (index % imagesPerRow) === 0;
                const rowClassName = `row${isFirstImageInRow ? ' mb-4' : ''}`;

                return (
                  <div key={id} className={`col-12 col-md-6 col-lg-4 col-xl-3 mb-4`}>
                    <div className={rowClassName}>
                      <div className='col-12'>
                        <div className='img-div'>
                          <img
                            src={image}
                            alt={`Image ${id}`}
                            className='img-fluid'
                            style={{ width: '40%', height: '30%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
