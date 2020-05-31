import React, { useState } from 'react';
import { StyleSheet, View, FlatList ,Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalVisible , setModalVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals((currentState) => [...currentState, { id: Math.random().toString(), data: goal }]);
  };

  const removeGoalHandler = (id) => {
    setGoals((currentState) => currentState.filter((goal) => goal.id !== id));
  };

  const toggleModalHandler = () => {
    setModalVisible((currentValue) => !currentValue)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={toggleModalHandler}></Button>
      <GoalInput visible={modalVisible} toggleModalHandler={toggleModalHandler} addGoalHandler={addGoalHandler}></GoalInput>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => <GoalItem removeGoalHandler={removeGoalHandler} item={itemData.item}></GoalItem>}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});

export default App;
