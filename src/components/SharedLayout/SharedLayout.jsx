import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link, NavContainer } from './SharedLayout.styled';

const SharedLayout = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
