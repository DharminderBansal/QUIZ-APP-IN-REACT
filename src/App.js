import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Box, Container } from '@mui/system';
// import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route path='/' element={<Settings />} />
              <Route path='/Questions' element={<Questions />} />
              <Route path='/Score' element={<FinalScreen />} />

            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );

}

export default App;
