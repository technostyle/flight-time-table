import React, { useState, useEffect } from "react";
import { Header, Segment, Divider } from "semantic-ui-react";

const dateOptions = {
  weekday: "long",
  // year: 'numeric',
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

const getCurrentDate = () => new Date().toLocaleString("ru-Ru", dateOptions);
export const Clock = () => {
  const [time, setTime] = useState(getCurrentDate());
  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentDate()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Segment>
      <Header as="h2" textAlign="center">
        Flights timetable
      </Header>
      <Divider />
      <Header as="h3" textAlign="center">
        {time}
      </Header>
    </Segment>
  );
};
