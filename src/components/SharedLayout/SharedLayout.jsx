import { Outlet } from 'react-router-dom';
import { Container, Header, Link, NavContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavContainer>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </NavContainer>
      </Header>
      <Outlet />
    </Container>
  );
};
