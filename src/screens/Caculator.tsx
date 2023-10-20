import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const Caculator = () => {
  const [input, setInput] = useState('0');

  // handleInput 함수를 useCallback으로 래핑
  const handleInput = useCallback((value: string) => {
    if (value === 'AC') {
      setInput('0');
    } else {
      setInput(prevInput => (prevInput === '0' ? value : prevInput + value));
    }
  }, []);

  // 수식 계산을 위한 함수
  const handleCalculator = useCallback(() => {
    try {
      const result = eval(input);
      setInput(Number.isFinite(result) ? result.toString() : 'Error');
    } catch (e) {
      setInput('Error');
    }
  }, [input]);

  const layout = [
    [
      {inputValue: '7', style: styles.button, handler: handleInput},
      {inputValue: '8', style: styles.button, handler: handleInput},
      {inputValue: '9', style: styles.button, handler: handleInput},
      {
        inputValue: '/',
        displayText: '÷',
        style: styles.operationButton,
        handler: handleInput,
      },
    ],

    [
      {inputValue: '4', style: styles.button, handler: handleInput},
      {inputValue: '5', style: styles.button, handler: handleInput},
      {inputValue: '6', style: styles.button, handler: handleInput},
      {
        inputValue: '*',
        displayText: '×',

        style: styles.operationButton,
        handler: handleInput,
      },
    ],

    [
      {inputValue: '1', style: styles.button, handler: handleInput},
      {inputValue: '2', style: styles.button, handler: handleInput},
      {inputValue: '3', style: styles.button, handler: handleInput},
      {inputValue: '-', style: styles.operationButton, handler: handleInput},
    ],

    [
      {inputValue: '0', style: styles.button, handler: handleInput},
      {inputValue: '.', style: styles.button, handler: handleInput},
      {inputValue: 'AC', style: styles.button, handler: handleInput},
      {inputValue: '+', style: styles.operationButton, handler: handleInput},
    ],
    [
      {
        inputValue: '=',
        style: styles.calculatorButton,
        handler: handleCalculator,
      },
    ],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline={false} editable={false}>
          {input}
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        {layout.map(rows => (
          <View style={styles.row}>
            {rows.map(row => (
              <Pressable
                key={row.inputValue}
                style={row.style}
                onPress={() => row?.handler(row.inputValue)}>
                <Text style={styles.buttonText}>
                  {row?.displayText ? row.displayText : row.inputValue}
                </Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Caculator;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  inputContainer: {
    height: 160,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  input: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'right',
  },
  button: {
    flex: 1,
    backgroundColor: '#505050',
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
  },
  calculatorButton: {
    width: '100%',
    backgroundColor: '#ff9500',
    borderRadius: 38,
    padding: 16,
  },
  operationButton: {
    flex: 1,
    backgroundColor: '#ff9500',
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
});
