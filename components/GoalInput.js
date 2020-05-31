import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, toggleModalHandler }) => {
  const [goal, setGoal] = useState('');

  const handleChangeText = (text) => {
    setGoal(text);
  };

  const handleAddGoal = () => {
    addGoalHandler(goal);
    toggleModalHandler();
    setGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal..."
          placeholderTextColor={'#000'}
          style={styles.input}
          value={goal}
          onChangeText={handleChangeText}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonStyle}>
            <Button title="CANCEL" onPress={toggleModalHandler} color="red"></Button>
          </View>
          <View style={styles.buttonStyle}>
            <Button title="ADD" onPress={handleAddGoal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    width: '90%',
    padding: 5,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 30,
  },

  buttonStyle: {
    width: '45%',

  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoalInput;
