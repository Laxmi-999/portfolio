import React, { useState } from 'react';
import { faHome, faBed, faCar, faCalendarDay, faPerson, faHotel, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TicketingPage.css';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Hotels from './Hotels';


// import { DateRangePicker } from 'rsuite';

const TicketingPage = () => {
  //   const[date, setDate] = useState(
  //     [
  //       {

  //         startDate: new Date(),
  //         endDate: null,
  //         key: 'selection',
  //       }
  // ]);
  const[openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [option, setOperation] = useState(
    {
      adult: 1,
      child: 0,
      room: 1
    });
    
    const handleOption = (name, operation) =>
    setOperation((prev)=>
    {
      return{
        ...prev,
        [name]:operation === 'i'? option[name]+1 : option[name]-1,
      };
    });

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faHotel} className='icon' />
              <span>Hotel</span>
            </div>
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faRoute} className='icon' />
              <span>Direction</span>
            </div>
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faHome} className='icon' />
              <span>stay</span>
            </div>
          </div>
          <h1 className='headerTitle'>book your ticket from here </h1>
          <p className="headerDesc"> get discount for your travel</p>
          <button className='headerButton'>sign in/register </button>

          <div className='headerSearch'>
            <div className='headerSearchItems'>
              <FontAwesomeIcon icon={faHome} className='searchIcon' />
              <input type='text' placeholder='choose your destinations' className='headerSearchPlace' />
            </div>

            <div className='headerSearchItems'>
              <FontAwesomeIcon icon={faCalendarDay} className='searchIcon' />
              <span className='headerSearchDate'>
                <div className='datePicker'>
                  <DatePicker
                    selectsStart
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    startDate={startDate}
                    className='date'
                  />
                  <DatePicker
                    selectsEnd
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                    className='date'
                  />
                </div>

              </span>
              {/* <DateRange 
                 editableDateInputs = {true}
                 onChange = {(item => setDate([item.Selection]) )}
                 moveRangeOnFirstSelection={false}
                 ranges = {date}
                 className='date' /> */}
            </div>


            <div className='headerSearchItems'>
              <FontAwesomeIcon icon={faPerson} className='searchIcon' />
              <span  onClick = {() => setOpenOption(!openOption)} className="headerSearchPerson">{option.adult} adult . {option.child} child . {option.room} room</span>
              {openOption && <div className="option">
                <div className="optionItems">
                  <span className='optionText'>adult</span>
                            <div className='counter'>
                            <button 
                            disabled = {option.adult<=1}
                            className='optionCounterButton'
                             onClick={()=>handleOption("adult", "d")}>-</button>
                            <span className='optionCounterNumber'>{option.adult}</span>
                            <button className='optionCounterButton' 
                            onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>

                </div>

                <div className = "optionItems">
                    <span className='optionText'>child</span>         
                       <div className = "counter">
                            <button
                              disabled = {option.child<=0}
                             className='optionCounterButton'
                              onClick={()=>handleOption("child", "d")}>-</button>
                            <span className='optionCounterNumber'>{option.child}</span>
                            <button className='optionCounterButton' 
                            onClick={()=>handleOption("child", "i")}>+</button>
                        </div>
                           
                 </div> 

               <div className = "optionItems">
                  <span className='optionText'>room</span>
                     <div className = "counter">
                            <button
                            disabled = {option.room<=1}
                             className='optionCounterButton' 
                             onClick={()=>handleOption("room", "d")}>-</button>
                            <span className='optionCounterNumber'>{option.room}</span>
                            <button className='optionCounterButton'
                              onClick={()=>handleOption("room", "i")}>+</button>
                      </div>   
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className='booking-confirmation'>
       <span>Hotels and stays for the traveller are handle by the 
        company's staff itself.
       </span>
       <button >Book Now</button>
      </div>
    </>
  )
  // 
}
export default TicketingPage;