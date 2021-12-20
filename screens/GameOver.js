import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const GameOver = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button onPress={restart} title='New game'/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOver;
