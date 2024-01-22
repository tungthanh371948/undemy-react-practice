import logo from './logo.svg';
import './App.scss';
import TableUsers from './component/TableUsers';
import Header from './component/Header';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <TableUsers/>
    </div>
  );
}

export default App;
