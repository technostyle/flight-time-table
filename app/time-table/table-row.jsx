import { Table } from "semantic-ui-react";
import React from "react";

export const FlightRow = ({
  departure,
  destination,
  departureTime,
  destinationTime,
  gateWay
}) => (
  <Table.Row>
    <Table.Cell>{`${departure.city} ${departure.abbr}`}</Table.Cell>
    <Table.Cell>{`${destination.city} ${destination.abbr}`}</Table.Cell>
    <Table.Cell>{departureTime.toString()}</Table.Cell>
    <Table.Cell>{destinationTime.toString()}</Table.Cell>
    <Table.Cell>{"4h"}</Table.Cell>
    <Table.Cell>{gateWay}</Table.Cell>
  </Table.Row>
);
