import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonWrapper from './components/ButtonComponents/ButtonWrapper';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-Container">
      <CalculatorDisplay />>
      <ButtonWrapper className="clear-button">
        <ActionButton className="triple-text" text="Clear" />
        <NumberButton bgColor="red-button" text="/" />
      </ButtonWrapper>
      <ButtonWrapper>
        <NumberButton bgColor="num-button" text="7" />
        <NumberButton bgColor="num-button" text="8" />
        <NumberButton bgColor="num-button" text="9" />
        <NumberButton bgColor="red-button" text="X" />
      </ButtonWrapper>
      <ButtonWrapper>
        <NumberButton bgColor="num-button" text="4" />
        <NumberButton bgColor="num-button" text="5" />
        <NumberButton bgColor="num-button" text="6" />
        <NumberButton bgColor="red-button" text="-" />
      </ButtonWrapper>
      <ButtonWrapper>
        <NumberButton bgColor="num-button" text="1" />
        <NumberButton bgColor="num-button" text="2" />
        <NumberButton bgColor="num-button" text="3" />
        <NumberButton bgColor="red-button" text="+" />
      </ButtonWrapper>
      <ButtonWrapper>
        <ActionButton className="triple-text" text="0" />
        <NumberButton bgColor="red-button" text="=" />
      </ButtonWrapper>
    </div>
  );
};
export default App;