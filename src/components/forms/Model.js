import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Model.css';
import TicketingPage from './TicketingPage';

const Model = ({ openModel, setOpenModel }) => {
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        date: "",
        ticket: "",
        comment: "",

    });
    // let name, value;

    const getUserData = (event) => {
        const  name = event.target.name;
         const value = event.target.value;

         setUser({ ...user, [name]:value});

        // setUser({ ...user, [name]: name.name === "date" ? value.value.toString() : value });// setting up dynamic data for the individual input fields//
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', user);
      
      };
    const postData = async (e) => {
        // e.preventDefault();

        const {name, address,phone,comment} = user;
    

        const res =  await fetch("https://reactproject-25c2c-default-rtdb.firebaseio.com/reactTicketingForm.json",
         {
            method: "POST",
            headers : 
            {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
                address,
                phone,
                comment,

            }),
         }

        );
    };

    const [selectedDate, setSelectedDate] = useState(null);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission here
    // };
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
  


    return (
        <>
            <div className="form-container">
                <h2>Ticket Booking Form</h2>
                <form  onSubmit = {handleSubmit}>

                    <div className='form-Items-container'>

                        <div className='name-container'>
                            <label htmlFor="name"> Name:</label>
                            <div className='input-container'>
                                <input type="text" id="name"
                                    name="name"
                                    placeholder='enter  name'
                                    value={user.name}
                                    onChange={getUserData}
                                    autoComplete='off'
                                    required
                                />

                            </div>

                        </div>


                        <div className='name-container'>
                            <label htmlFor="address">Address:</label>
                            <div className='input-container'>
                                <input type="text" id="address"
                                    name="address"
                                    placeholder='enter address'
                                    required
                                    value={user.address}
                                    onChange={getUserData}
                                    autoComplete='off'
                                />

                            </div>

                        </div>


                        {/* <div className='email-container'>
                            <label htmlFor="email">Email:</label>
                            <div className='input-container'>
                                <input type="email" id="email"
                                    name="email"
                                    placeholder='enter email'
                                    value={user.email}
                                    onChange={getUserData}
                                    autoComplete='off'
                                    required
                                />
                            </div>
                        </div> */}

                        <div className='contactNum-container'>
                            <label htmlFor="phone">Phone Number:</label>
                            <div className='input-container'>
                                <input type="tel" id="phone" name="phone"
                                    placeholder='enter phone number'
                                    value={user.phone}
                                    onChange={getUserData}
                                    autoComplete='off'
                                    required />
                            </div>
                        </div>


                        {/* <div className='date-container'>
                            <label htmlFor="bookingDate">Booking Date and Time:</label>
                            <div className='input-container'>
                                <input  placeholder='pick date' />
                                <DatePicker
                                    selected={selectedDate} 
                                     onChange={handleDateChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    placeholderText='pick date'
                                    autoComplete='off'
                                    name='date'
                                    value={user.date}
                                    onChange={getValue}
                                    required
                                />

                            </div>
                        </div> */}


                        {/* <div className='ticketType-container'>
          <label htmlFor="ticketType">Ticket Type</label>
            <div className='input-container'> 
              <select id="ticketType" name="ticketType">
              <option value="standard">Standard</option>
              <option value="vip">VIP</option>
              </select>
          </div>
       </div> */}

{/* 
                        <div className='ticketNumber-container'>
                            <label htmlFor="numTickets">Number of Tickets:</label>
                            <div className='input-container'>
                                <input type="number" id="numTickets"
                                    name="numTickets"
                                    placeholder='enter No. of ticket'
                                    value={user.ticket}
                                    autoComplete='off'
                                    onChange={getUserData}
                                    />
                            </div>
                        </div> */}


                        {/* <div className='comment-container'>
                            <label htmlFor="comments">Additional Comments:</label>
                            <textarea id="comments"
                                name="comments" rows="4"
                                placeholder='add comment here'
                                value={user.comment}
                                onChange={getUserData}
                            ></textarea>
                        </div> */}

                        <div className='button-container'>
                            <button type="submit"
                              onClick={() => {postData(); }}>
                            Submit</button>

                            <button type="submit"
                                onClick={() => {
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