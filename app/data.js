import React, { useState } from "react";
import { randomInteger, arrayFromOneToN } from "./utils";
import { AIRPORTS, GATEWAYS, CURRENT_DATE } from "./constants";

const getRandomAirport = () => AIRPORTS[randomInteger(0, AIRPORTS.length - 1)];

const getRandomGateWay = () => GATEWAYS[randomInteger(0, GATEWAYS.length - 1)];

const airportsWithSameCity = badCity =>
  AIRPORTS.filter(({ city }) => city !== badCity);
const randAirportExcept = badAirports => {
  const badIds = badAirports.map(({ id }) => id);
  const okAirports = AIRPORTS.filter(({ id }) => badIds.includes(id));
  return okAirports[randomInteger(0, okAirports.length - 1)];
};

const randAirportNotInCity = city => {
  const badAirports = airportsWithSameCity(city);
  return randAirportExcept(badAirports);
};

// const getRandomDate = (from, to) => {
// 	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
// }

const getRandomTimeTableRow = () => {
  const departure = getRandomAirport();
  const destination = randAirportNotInCity(departure.city);
  const departureTime = new Date();
  const destinationTime = new Date();
  const gateWay = getRandomGateWay();
  return { departure, destination, departureTime, destinationTime, gateWay };
};

const DATA = arrayFromOneToN(100).map(getRandomTimeTableRow);
export const getData = ({ offset, count }) => {
  console.log("getData", { offset, count });
  return DATA.slice(offset, offset + count);
};

export const getDataCount = () => DATA.length;
