import React from 'react';
// import Icon from '../Antd/Icon/Icon';
import Icon from '@ant-design/icons';
import Input from '../Antd/Input/Input';
import InputIncDecWrapper from './InputIncDec.style';

const InputIncDec = ({ className, increment, decrement, ...restProps }) => {
  const addAllClasses = ['quantity'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <InputIncDecWrapper className={addAllClasses.join(' ')}>
      <button className="btn decBtn" type="button" onClick={decrement}>
        <Icon type="minus" />
      </button>
      <Input className="qnt-input" type="number" {...restProps} />
      <button className="btn incBtn" type="button" onClick={increment}>
        <Icon type="plus" />
      </button>
    </InputIncDecWrapper>
  );
};

export default InputIncDec;
