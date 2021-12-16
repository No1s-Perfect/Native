import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalList, setGoalList] = useState([]);
  const addGoal = (goal) =>
    setGoalList([...goalList, { id: Date.now().toString(), text: goal }]);

  const onDelete = (id) =>
    setGoalList(goalList.filter((item) => item.id !== id));
  return (
    <View style={styles.view1}>
      <GoalInput addGoal={addGoal} />
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
