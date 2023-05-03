import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


// import './EventCalendar.css'

function EventCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

//  function EventCalendar() {
//   const [value, setValue] = useState(new Date());

//   function onChange(nextValue) {
//     setValue(nextValue);
//   }

//   return (
//     <Calendar
//       onChange={onChange}
//       value={value}
//     />
//   );
// }
export default EventCalendar