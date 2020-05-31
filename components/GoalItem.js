import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, removeGoalHandler }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => removeGoalHandler(item.id)}>
      <View style={styles.listItem}>
        <Text>{item.data}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 15,
  },
});
