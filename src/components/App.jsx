import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link, NavContainer } from './App.styled';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';

export const App = () => {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/trandings" element={<Trandings />} /> */}
      </Routes>
    </Container>
  );
};
