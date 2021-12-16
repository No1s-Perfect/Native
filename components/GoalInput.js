import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  return (
    <View style={styles.view2}>
      <TextInput
        onChangeText={setGoal}
        value={goal}
        placeholder="Add item"
        style={styles.input}
      />
      <Button title="ADD" onPress={() => addGoal(goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
