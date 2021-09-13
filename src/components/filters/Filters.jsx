import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearDoneTodo, toggleFilter } from '../../store/actions/actions';
import { Button } from 'antd';
import { Select } from 'antd';

import 'antd/dist/antd.css';

const { Option } = Select;
const Filters = () => {
  const dispatch = useDispatch();

  const handlerClearDoneTodo = () => {
    dispatch(clearDoneTodo());
  };

  function onChange(value) {
    console.log(`selected ${value}`);
    dispatch(toggleFilter(value));
  }

  return (
    <div className="filters">
      <Select
        showSearch
        className="select"
        style={{ width: 245, marginRight: 25 }}
        placeholder="Sort todos"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="All">All</Option>
        <Option value="Completed">Completed</Option>
        <Option value="In Progress">In Progress</Option>
      </Select>

      <Button type="primary" danger onClick={() => handlerClearDoneTodo()}>
        CLEAR DONE
      </Button>
    </div>
  );
};

export default connect()(Filters);
