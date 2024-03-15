import React from 'react';
import { NavLinks } from "./styles/DealsDeatails.styled";
import { NavItem } from './styles/Nav.styled';

export default function BodyNavbar({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <NavItem key={index}>
            <a href={item.link}>{item.text}</a>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
