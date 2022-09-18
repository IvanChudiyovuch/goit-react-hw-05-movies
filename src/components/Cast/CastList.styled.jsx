import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  border-top: 1px solid black;
`;

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
  flex-basis: calc((100% - 150px) / 5);
  padding: ${p => p.theme.space[2]}px;
  flex-wrap: wrap;
  object-fit: cover;
  flex-grow: 1;
`;

export const ListImage = styled.img`
  width: 100%;
`;

export const ActorContent = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
