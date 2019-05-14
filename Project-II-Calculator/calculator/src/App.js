import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonWrapper from './components/ButtonWrapper';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App extends React.Component {
  render() {
    return (
      <div className="calc-Container">
        <CalculatorDisplay />>
        <ButtonContainer className="clear-button">
          <ActionButton className=""
        </ButtonContainer>
      </div>
    );
  };
}
export default App;