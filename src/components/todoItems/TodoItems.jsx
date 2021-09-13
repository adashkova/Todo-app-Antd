import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { removeTodo, markTodo, getTodo } from '../../store/actions/actions';
import TodoItem from '../todoItem/TodoItem';
import { Spin, Alert } from 'antd';
import './todoItems.css';
import 'antd/dist/antd.css';

const TodoItems = () => {
  const todos = useSelector(state => state.todoReducer);
  const filters = useSelector(state => state.filtersReducer);

  const dispatch = useDispatch();

  // GET TODO FROM API

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handlerDeleteTodo = id => {
    dispatch(removeTodo(id));
  };

  const handlerMarkTodo = id => {
    dispatch(markTodo(id));
  };

  const filterVisibleTodos = todos => {
    let currentFilter = filters.find(filter => filter.isActiveClass);

    if (currentFilter === undefined) {
      currentFilter = 'All';
    }

    if (currentFilter.text) {
      switch (currentFilter.text) {
        case 'All':
          return todos;

        case 'Completed':
          return !todos.isLoading ? todos.filter(todo => todo.isDone) : [];

        case 'In Progress':
          return !todos.isLoading ? todos.filter(todo => !todo.isDone) : [];

        default:
          return todos;
      }
    } else {
      return todos;
    }
  };

  const visibleTodos = filterVisibleTodos(todos);

  return (
    <div className="todo_items">
      {todos.isLoading ? (
        <Spin size="large" tip="Loading..." className="spin"></Spin>
      ) : visibleTodos.length ? (
        visibleTodos.map(todo => (
          <TodoItem
            key={todo.title}
            todo={todo.title}
            onClick={() => handlerDeleteTodo(todo._id)}
            onChange={() => handlerMarkTodo(todo._id)}
            isDone={todo.isDone}
          />
        ))
      ) : (
        <Alert
          message="No records found"
          description="You can write one)"
          type="info"
        />
      )}
    </div>
  );
};

export default connect()(TodoItems);
