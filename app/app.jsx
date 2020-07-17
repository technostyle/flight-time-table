import React from "react";
import { Container } from "semantic-ui-react";
import { Segment, Header } from "semantic-ui-react";
import { TimeTable } from "./table";

export const App = () => (
  <Container>
    <Segment>
      <Header as="h3" textAlign="center">
        Flights timetable
      </Header>
    </Segment>
    <Segment>
      <TimeTable />
    </Segment>
  </Container>
);
