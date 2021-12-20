import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
};
const GameScreen = ({ userChoice, gameOver }) => {
  const [guess, setGuess] = useState(generateRandomBetween(1, 100, userChoice));
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < userChoice) ||
      (direction === "greater" && guess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    direction === "lower"
      ? (currentHigh.current = guess)
      : (currentLow.current = guess);
    setGuess(
      generateRandomBetween(currentLow.current, currentHigh.current, guess)
    );
    setRounds(rounds + 1);
  };

  useEffect(() => {
    if (guess === userChoice) {
        gameOver(rounds);
      Alert.alert("You got it!", "You are a genius!", [
        { text: "Awesome!", style: "cancel" },
      ]);
    }
  }, [guess, userChoice, gameOver]);
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonCtn}>
        <Button title="LOWER" onPress={() => nextGuessHandler("lower")} />
        <Button title="GREATER" onPress={() => nextGuessHandler("greater")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default GameScreen;
