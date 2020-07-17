import React from "react";
import { Table } from "semantic-ui-react";
import { FlightRow } from "./table-row";

export const TableBody = ({ data }) => (
  <Table.Body>
    {data.map(
      (
        { departure, destination, departureTime, destinationTime, gateWay },
        idx
      ) => (
        <FlightRow
          key={idx}
          departure={departure}
          destination={destination}
          departureTime={departureTime}
          destinationTime={destinationTime}
          gateWay={gateWay}
        />
      )
    )}
  </Table.Body>
);
