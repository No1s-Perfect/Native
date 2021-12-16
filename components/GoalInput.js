import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, show, cancelAdd }) => {
  const [goal, setGoal] = useState("");

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.view2}>
        <TextInput
          onChangeText={setGoal}
          value={goal}
          placeholder="Add item"
          style={styles.input}
        />
        <View style={styles.botons}>
          <Button title="ADD" onPress={() => addGoal(goal)} />
          <Button title="Cancel" color="red" onPress={cancelAdd} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  botons: {
    flexDirection: "row",
    justifyContent:'space-between',
    width: '50%'
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
