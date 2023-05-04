// placeholder for hall page
import React from 'react'
import EventCalendar from './EventCalendar';
import EventCalendarBig from './components/AdminEventCalendarBig';
// import BookingForm from './BookingForm'
import './HallPage.css'
// import './EventCalendar.css'
import BookingForm from './BookingForm';
// import MultiDatePicker from './components/MultiDatePicker';
import { DatePicker } from '@mui/x-date-pickers';
import DateCalendarValue from './components/DatePicker';
import { Container } from '@mui/material';
import HallTables from './components/HallDataTable';
import Carousel from './components/carousel';
{/* <EventCalendar /> */}

function HallPage() {
  return (
    <>
    <Carousel className="carousel"/>
    <div className='hallpage-container'>
    
    <HallTables className='halltables-container' />
    
    <div>
    <DateCalendarValue />
    <BookingForm className='bookingform' />
    </div>

    </div>
    </>
  )
}

export default HallPage