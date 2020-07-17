import React from "react";
import { Container } from "semantic-ui-react";
import { Segment, Header } from "semantic-ui-react";
import { TimeTable } from "./time-table";
import { Clock } from "./clock";
import { getData, getDataCount } from "./data";

export const App = () => (
  <Container>
    <Clock />
    <TimeTable getData={getData} getDataCount={getDataCount} />
  </Container>
);
