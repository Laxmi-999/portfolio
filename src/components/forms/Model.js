import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Model.css';

const Model = ({openModel, setOpenModel}) =>{
const [selectedDate, setSelectedDate] = useState(null);
const handleSubmit = (e) =>
 {
    e.preventDefault();
        // Handle form submission here
};
const handleDateChange = (date) => {
    setSelectedDate(date);
  };



    return (
        <>
      <div className="form-container">
      <h2>Ticket Booking Form</h2>
      <form onSubmit={handleSubmit}>

      <div className='form-Items-container'>

        <div className='name-container'>
           <label htmlFor="name"> Name:</label>
            <div className='input-container'>
            <input type="text" id="name" name="name" required />
            </div>

        </div>


        <div className='name-container'>
            <label htmlFor="address">Address:</label>
            <div className='input-container'> 
                <input type="text" id="address" name="address" required />
            </div>
           
        </div>
        

        <div className='email-container'>
            <label htmlFor="email">Email:</label>
                <div className='input-container'> 
                 <input type="email" id="email" name="email" required />
              </div>
        </div>

        <div className='contactNum-container'>
           <label htmlFor="phone">Phone Number:</label>
              <div className='input-container'> 
                <input type="tel" id="phone" name="phone" required />
            </div>
        </div>
        

        <div className='date-container'>
            <label htmlFor="bookingDate">Booking Date and Time:</label>
            <div className='input-container'> 
               <DatePicker
                 selected={selectedDate}
                 onChange={handleDateChange}
                 showTimeSelect
                 timeFormat="HH:mm"
                 timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
               />
            </div>
        </div>
        

       {/* <div className='ticketType-container'>
          <label htmlFor="ticketType">Ticket Type</label>
            <div className='input-container'> 
              <select id="ticketType" name="ticketType">
              <option value="standard">Standard</option>
              <option value="vip">VIP</option>
              </select>
          </div>
       </div> */}


        <div className='ticketNumber-container'>
            <label htmlFor="numTickets">Number of Tickets:</label>
            <div className='input-container'>
              <input type="number" id="numTickets" name="numTickets" required />
            </div>
        </div>
        

        <div className='comment-container'>
            <label htmlFor="comments">Additional Comments:</label>
                <textarea id="comments" name="comments" rows="4"></textarea>
        </div>

        <div className='button-container'>
             <button type="submit">Submit</button>
             <button type="submit"
             onClick={()=> {
                setOpenModel(false);
             }}
             >cancel</button>
         </div>
    </div>
</form>
</div>
            

                
            
        </>
    );
};
export default Model;