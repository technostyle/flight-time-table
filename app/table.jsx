import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { getData } from "./data";

const tableHeaders = [
  "Departure",
  "Destination",
  "Departure time",
  "Destination time",
  "Flight time",
  "Gateway"
];

const FlightRow = ({
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

export const TimeTable = () => {
  const MAX_FLIGHTS_PER_PAGE = 5;
  const data = getData();
  const maxPage = Math.ceil(data.length / MAX_FLIGHTS_PER_PAGE);

  const [page, setPage] = useState(0);
  const [flights, setFlights] = useState(data.splice(MAX_FLIGHTS_PER_PAGE));

  useEffect(() => {
    setFlights(
      data.splice(
        page * MAX_FLIGHTS_PER_PAGE,
        (page + 1) * MAX_FLIGHTS_PER_PAGE
      )
    );
  }, [page]);

  const incrementPage = () => setPage(page + 1);
  const decrementPage = () => setPage(page - 1);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((title, idx) => (
            <Table.HeaderCell key={idx}>{title}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

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

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <Menu floated="right" pagination>
              <Menu.Item
                as="a"
                icon
                onClick={decrementPage}
                disabled={page === 0}
              >
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">{page + 1}</Menu.Item>
              <Menu.Item
                as="a"
                icon
                onClick={incrementPage}
                disabled={page === maxPage}
              >
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
