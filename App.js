import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addGoal = (goal) => {
    setGoalList([...goalList, { id: Date.now().toString(), text: goal }]);
    setShowModal(false);
  };

  const onDelete = (id) =>
    setGoalList(goalList.filter((item) => item.id !== id));

  const cancelAdd = () => setShowModal(false);
  return (
    <View style={styles.view1}>
      <Button title="Add new goal" onPress={() => setShowModal(true)} />
      {showModal && (
        <GoalInput cancelAdd={cancelAdd} show={showModal} addGoal={addGoal} />
      )}
      
      <FlatList
        data={goalList}
        renderItem={({ item }) => <GoalItem onDelete={onDelete} item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    padding: 50,
  },
});
