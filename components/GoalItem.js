import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, item.id)}>
      <View style={styles.goalText}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalText: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
