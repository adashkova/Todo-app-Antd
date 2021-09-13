import React from 'react';
import { Button, Switch, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './todoItem.css';

const TodoItem = ({ todo, onClick, onChange, isDone }) => {
  const { Text } = Typography;

  return (
    <div className="todo_item">
      <Switch checked={!isDone} defaultChecked onChange={onChange} />
      {isDone ? (
        <Text style={{ fontSize: '1.2rem' }} type="secondary" delete>
          {todo}
        </Text>
      ) : (
        <Text style={{ color: '#112031', fontSize: '1.2rem' }} strong>
          {todo}
        </Text>
      )}

      <Button type="primary" danger onClick={onClick}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default TodoItem;
