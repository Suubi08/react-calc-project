import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const[currentOperand, setCurrentOperand] = useState('');
    const[previousOperand, setPreviousOperand] = useState('')
    const[operation, setOperation] = useState('')

    const chooseOperation = (operation) => {
        if (currentOperand === '') return
        if (previousOperand !== ''){
           return compute() 
        }
        setOperation(operation)
        setPreviousOperand(currentOperand)
        setCurrentOperand('')
    }

    const clear = () => {
        setCurrentOperand('')
        setPreviousOperand('')
        setOperation(undefined)
    }

    const Delete = () => {
        setCurrentOperand(currentOperand.toString().slice(0, -1))
    }

    const compute = () => {
        let computation
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (operation) {
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            default:
                return        
        }
        setCurrentOperand(computation)
        setOperation(undefined)
        setPreviousOperand('')    
    }

    const updateDisplay = (number) => {
        if (number === '.' && currentOperand.includes('.'))return
        setCurrentOperand(currentOperand + number)
        if (operation != null) {
            setPreviousOperand(`${previousOperand} ${operation}`)
        }
    }

  return (
    <div className='calculator-grid'>
        <div className='output'>
            <div className='previous-operand'>{ previousOperand }</div>
            <div className='current-operand'>{ currentOperand }</div>
        </div>
        <button className='span-two' onClick={() => clear()}>AC</button>
        <button onClick={() => Delete()}>DEL</button>
        <button onClick={() => chooseOperation('÷')}>÷</button>
        <button onClick={() => updateDisplay(1)}>1</button>
        <button onClick={() => updateDisplay(2)}>2</button>
        <button onClick={() => updateDisplay(3)}>3</button>
        <button onClick={() => chooseOperation('*')}>*</button>
        <button onClick={() => updateDisplay(4)}>4</button>
        <button onClick={() => updateDisplay(5)}>5</button>
        <button onClick={() => updateDisplay(6)}>6</button>
        <button onClick={() => chooseOperation('+')}>+</button>
        <button onClick={() => updateDisplay(7)}>7</button>
        <button onClick={() => updateDisplay(8)}>8</button>
        <button onClick={() => updateDisplay(9)}>9</button>
        <button onClick={() => chooseOperation('-')}>-</button>
        <button onClick={() => updateDisplay('.')}>.</button>
        <button onClick={() => updateDisplay(0)}>0</button>
        <button className='span-two' onClick={() => compute()}>=</button>
    </div>
  )
}

export default Calculator