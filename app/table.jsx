import React from "react";
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
  const data = getData();
  console.log({ data });
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
        {/*<Table.Row>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*</Table.Row>*/}
        {/*<Table.Row>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*</Table.Row>*/}
        {/*<Table.Row>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*	<Table.Cell>Cell</Table.Cell>*/}
        {/*</Table.Row>*/}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
