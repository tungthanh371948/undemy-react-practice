import logo from './logo.svg';
import './App.scss';
import TableUsers from './component/TableUsers';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
function App() {
  return (
    
<div className='app-container'>
          <Header/>
          <Container>
            <TableUsers/>
          </Container>
  </div>
  );
}

export default App;
