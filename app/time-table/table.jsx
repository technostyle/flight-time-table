import React, { useState, useEffect } from "react";
import { Segment, Table, Dimmer, Loader } from "semantic-ui-react";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableFooter } from "./table-footer";
import { MAX_FLIGHTS_PER_PAGE } from "./constants";

export const TimeTable = ({ getData, getDataCount }) => {
  const [page, setPage] = useState(0);
  const [flights, setFlights] = useState(null);
  const [maxPage, setMaxPage] = useState(0);

  const fetchFlights = params =>
    getData(params)
      .then(setFlights)
      .catch(console.error);
  const fetchFlightCount = () =>
    getDataCount()
      .then(flightsDataCount =>
        setMaxPage(Math.ceil(flightsDataCount / MAX_FLIGHTS_PER_PAGE - 1))
      )
      .catch(console.error);

  useEffect(() => {
    fetchFlights({ offset: 0, count: MAX_FLIGHTS_PER_PAGE });
    fetchFlightCount();
  }, []);

  useEffect(() => {
    setFlights(null);
    fetchFlights({
      offset: page * MAX_FLIGHTS_PER_PAGE,
      count: MAX_FLIGHTS_PER_PAGE
    });
  }, [page]);

  const incrementPage = () => setPage(page + 1);
  const decrementPage = () => setPage(page - 1);

  return (
    <Segment>
      <Dimmer active={!flights} inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
      <Table celled>
        <TableHeader />
        <TableBody data={flights} />
        <TableFooter
          page={page}
          maxPage={maxPage}
          decrementPage={decrementPage}
          incrementPage={incrementPage}
        />
      </Table>
    </Segment>
  );
};
