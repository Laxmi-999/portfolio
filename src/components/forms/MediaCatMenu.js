import React, { useState } from 'react';


// const viewImage = (img ,i) =>
// setData ({img,i})
// const[data, setData] = useState ({img:'', i:0})



const MediaCatMenu = ({ filterItem, catItems }) => {

    return (
        <>
        {/* {data.img && 
        <div style =  {{
            height:'100vh',
            width:'100%',
            background:'black',
            position:'fixed',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden'
        }}>
        <img src ={data.img} style = {{
            maxHeight:'90%',
            maxWidth:'90%',
            width:'auto',
            }} />

        </div>} */}

            <div className='menu-tabs container d-flex justify-content-center'>
                <div className='Menu-tab d-flex justify-content-around'>
                    {/* setCatItems.map((curElem, index) =>
          {
            return <button className='btn btn-warning' key = {index}onClick={() => filterItem(curElem)}>curElem</button>
          }) */}

                   { catItems.map((elem, index) => 
                        (
                        <button className='btn btn-warning' key={index} onClick={() => filterItem(elem)}
                         >{elem}</button>
                    ))}
                    
                    {/* <button className='btn btn-warning' onClick={() => filterItem('All')}>All</button>

                    <button className='btn btn-warning' onClick={() => filterItem('Mardi')}>Mardi</button>
                    <button className='btn btn-warning' onClick={() => filterItem('Gosaikunda')}>Gosaikunda</button>
                    <button className='btn btn-warning' onClick={() => filterItem('Manang')}>Manang</button> */}
                </div>
            </div>
        </>
    )
}
export default MediaCatMenu