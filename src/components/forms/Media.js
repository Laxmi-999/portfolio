import React, { useState } from 'react';
import Menu from './Menu';
import './Media.css';

import './image_grid.css';
import MediaMenuItem from './MediaMenuItem';
import MediaCatMenu from './MediaCatMenu';



const Media = () => {
  const [original] = useState(Menu);


  const [item, setItems] = useState(Menu);

  const allCatVlaues = [...new Set(original.map((elem, index) => elem.Category))];
  const myDestinations = [...allCatVlaues];
  console.log(myDestinations);

  const [catItems, setCatItems] = useState(myDestinations);
  const imagesPerRow = 5;

  // to display images according to the Menu Category
  const filterItem = (catItem) => {
    if (
      catItem === 'All'

    ) {
      setItems(original);
      return;
    }
    const updatedItem = original.filter((curElem) => {
      return curElem.Category === catItem;
    });
    console.log("updated item is" + updatedItem);
    setItems(updatedItem);
  }


  return (
    <>
      <div>
        <h1 className='mt-5 text-center main-heading'>Here we go</h1>

      </div>
      {/* out menu category  goes here */}
      <MediaCatMenu filterItem={filterItem} catItems={catItems} />


      {/* our Menu items goes here */}
      <MediaMenuItem item={item} />

    </>
  );
};

export default Media;


