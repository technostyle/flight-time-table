import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { getData } from "data";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableFooter } from "./table-footer";
import { MAX_FLIGHTS_PER_PAGE } from "./constants";

export const TimeTable = () => {
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
      <TableHeader />
      <TableBody data={data} />
      <TableFooter
        page={page}
        maxPage={maxPage}
        decrementPage={decrementPage}
        incrementPage={incrementPage}
      />
    </Table>
  );
};
