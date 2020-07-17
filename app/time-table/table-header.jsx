import { Table } from "semantic-ui-react";
import React from "react";

const tableHeaders = [
  "Departure",
  "Destination",
  "Departure time",
  "Destination time",
  "Flight time",
  "Gateway"
];

export const TableHeader = () => (
  <Table.Header>
    <Table.Row>
      {tableHeaders.map((title, idx) => (
        <Table.HeaderCell key={idx}>{title}</Table.HeaderCell>
      ))}
    </Table.Row>
  </Table.Header>
);
