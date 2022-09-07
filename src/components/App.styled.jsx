import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px 0;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
  }
`;

export const NavContainer = styled.div`
  margin: 0;
  padding: 0 ${p => p.theme.space[4]}px;
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
