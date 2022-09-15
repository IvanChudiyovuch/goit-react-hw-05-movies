import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[3]}px;
  padding: 4px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: uppercase;
  margin-top: ${p => p.theme.space[3]}px;
  :hover {
    background-color: ${p => p.theme.colors.accent};
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;
