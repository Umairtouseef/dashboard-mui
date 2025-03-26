import React, { useState } from "react";
// import { Calendar, momentLocalizer, SlotInfo, Event } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";



// interface CalendarEvent {
//   title: string;
//   start: Date;
//   end: Date;
// }

// const initialEvents: CalendarEvent[] = [];

const ReactBigCalendar: React.FC = () => {
//   const [eventsData, setEventsData] = useState<CalendarEvent[]>(initialEvents);

//   const handleSelect = ({ start, end }: SlotInfo) => {
//     console.log(start, end);
//     const title = window.prompt("New Event name");
//     if (title) {
//       setEventsData((prevEvents) => [
//         ...prevEvents,
//         { start: new Date(start), end: new Date(end), title },
//       ]);
//     }
//   };

  return (
    <div className="App">
      {/* <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        // localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        // events={eventsData}   
        style={{ height: "100vh" }}
        onSelectEvent={(event: Event) => alert(event.title)}
        onSelectSlot={handleSelect}
      /> */}
    </div>
  );
};

export default ReactBigCalendar;
