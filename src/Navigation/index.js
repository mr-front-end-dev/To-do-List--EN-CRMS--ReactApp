import React from "react";
import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
        </Item>
      </List>
      <List>
        <Item>
          <StyledNavLink to={toAuthor()}>About the author</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};