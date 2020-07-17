import React from "react";
import { Container } from "semantic-ui-react";
import { Segment, Header } from "semantic-ui-react";
import { TimeTable } from "./time-table";
import { Clock } from "./clock";
import { getData, getDataCount } from "./data";

export const App = () => (
  <Container>
    {/*<Segment>*/}
    {/*  <Header as="h2" textAlign="center">*/}
    {/*    Flights timetable*/}
    {/*  </Header>*/}
    {/*</Segment>*/}
    {/*<Segment>*/}
    {/*  <Clock />*/}
    {/*</Segment>*/}
    <Clock />
    <Segment>
      <TimeTable getData={getData} getDataCount={getDataCount()} />
    </Segment>
  </Container>
);
