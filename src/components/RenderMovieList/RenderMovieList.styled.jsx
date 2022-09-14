import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: centr;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 120px) / 4);
  padding: ${p => p.theme.space[2]}px;
  flex-wrap: wrap;
  object-fit: cover;
  &:hover,
  &:focus {
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
      0px 1px 1px rgba(0, 0, 0, 0.12);
    transform: scale(1.03);
  }
`;

export const ListImage = styled.img`
  width: 100%;
  height: 100%;
`;
