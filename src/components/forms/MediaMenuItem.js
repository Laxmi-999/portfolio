import React from 'react'
import ImageGrid from './image_grid';
import './Media.css';


const MediaMenuItem  = (props) =>{
    return(
        <>
            
      {/* Main images section */}
      <div className='Menu-items container-fluid mt-5'>

<div className='column-container col-11 mx-auto'>
  <div className='row my-5'>
    <div className='app-container'>


      <ImageGrid imageList={props.item.map((elem, index) => elem.image)} 
      className='custom-grid' containerClassName='custom-container' />

    </div>

    {/* {item.map((elem, index) => {
      const { id, image } = elem;
      const isFirstImageInRow = (index % imagesPerRow) === 0;
      const rowClassName = `row${isFirstImageInRow ? 'col-xl-3 ' : ''}`;

      return (
        <div key={id} className={`col-12 col-md-6 col-lg-4 col-xl-3 mb-4`}>
          <div className={rowClassName}>
            <div className='col-12'>
              <div className='img-div'>
                <img
                  src={image}
                  alt={`Image ${id}`}
                  className='img-fluid'
                  style={{ width: '20%', height: '30%' }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    })} */}
  </div>
</div>

</div>
 </>
    )
}
export default MediaMenuItem;
    
