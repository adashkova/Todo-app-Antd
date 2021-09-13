import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/actions';
import { Button } from 'antd';
import { Input } from 'antd';

import 'antd/dist/antd.css';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handlerOnSubmit = () => {
    if (!inputValue.trim()) {
      return alert('Please input value!');
    }

    dispatch(addTodo(inputValue));

    console.log(inputValue);
    setInputValue('');
  };

  return (
    <form className="form">
      <Input
        className="input"
        size="large"
        placeholder="Thing to do..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onPressEnter={e => {
          e.preventDefault();
          handlerOnSubmit();
        }}
      />
      <Button
        type="primary"
        className="add_btn"
        onClick={() => handlerOnSubmit()}
      >
        Add todo
      </Button>
    </form>
  );
};

export default connect()(Form);
