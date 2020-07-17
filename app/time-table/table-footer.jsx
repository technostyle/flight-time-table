import { Icon, Menu, Table } from "semantic-ui-react";
import React from "react";

export const TableFooter = ({
  decrementPage,
  incrementPage,
  page,
  maxPage
}) => (
  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell colSpan="6">
        <Menu floated="right" pagination>
          <Menu.Item as="a" icon onClick={decrementPage} disabled={page === 0}>
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
);
