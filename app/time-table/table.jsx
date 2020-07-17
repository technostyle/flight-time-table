import React, { useState, useEffect } from "react";
import { Container, Segment, Table } from "semantic-ui-react";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableFooter } from "./table-footer";
import { MAX_FLIGHTS_PER_PAGE } from "./constants";

export const TimeTable = ({ getData, getDataCount }) => {
  const [page, setPage] = useState(0);
  const [flights, setFlights] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    setFlights(getData({ offset: 0, count: MAX_FLIGHTS_PER_PAGE }));
    setMaxPage(Math.ceil(getDataCount / MAX_FLIGHTS_PER_PAGE - 1));
  }, []);

  useEffect(() => {
    const offset = page * MAX_FLIGHTS_PER_PAGE;
    setFlights(getData({ offset, count: MAX_FLIGHTS_PER_PAGE }));
  }, [page]);

  const incrementPage = () => setPage(page + 1);
  const decrementPage = () => setPage(page - 1);

  return (
    <Segment>
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
