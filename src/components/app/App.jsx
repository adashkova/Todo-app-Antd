import TodoItems from '../todoItems/TodoItems';
import Form from '../form/Form';
import Filters from '../filters/Filters';
import { Typography } from 'antd';

import './App.css';

require('dotenv').config();

function App() {
  const { Title } = Typography;

  return (
    <div className="App">
      <div className="container">
        <Title style={{ color: '#112031' }} italic>
          Todo App
        </Title>
        <Form />
        <TodoItems />
        <Filters />
      </div>
    </div>
  );
}

export default App;
