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
// import Carousel from './components/carousel';
import Carousel2 from './components/Carousel2';
import HallTables from './components/HallDataTable';
// import { Example, Item } from './components/Carousel3.jsx';

{/* <EventCalendar /> */}

function HallPage() {
  return (
    <>
    <Carousel2 className="carousel"/>
    <div className='hallpage-container'>
    
    <HallTables />
    

    <DateCalendarValue />
    <BookingForm />

    </div>
    </>
  )
}

export default HallPage