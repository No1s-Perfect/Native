import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const startGameHandler = (selectedNumber) => setUserNumber(selectedNumber);

  const gameOverHandler = (numOfRounds) => setGuessRounds(numOfRounds);

  const confNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {userNumber && guessRounds <= 0 && (
        <GameScreen gameOver={gameOverHandler} userChoice={userNumber} />
      )}
      {!userNumber && <StartGameScreen cb={startGameHandler} />}
      {guessRounds > 0 && (
        <GameOver
          restart={confNewGame}
          rounds={guessRounds}
          userNumber={userNumber}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
