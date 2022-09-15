import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: centr;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: ${p => p.theme.space[4]}px;
  flex-wrap: wrap;
  object-fit: cover;
`;

export const ListImage = styled.img`
  height: 400px;
`;
