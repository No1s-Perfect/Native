import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Color from "../constants/color";
import NumberContainer from "../components/NumberContainer";
import Input from "../components/Input";
const StartGameScreen = ({ cb }) => {
  const [number, setNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputChange = (input) => {
    setNumber(input.replace(/[^0-9]/g, ""));
    setConfirm(false);
  };

  const cofirmHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: () => setNumber("") }]
      );
      return;
    }
    setConfirm(true);
    setNumber("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength="2"
            onChangeText={numberInputChange}
            value={number}
          />
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Color.accent}
                onPress={() => setNumber("")}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={cofirmHandler}
                color={Color.primary}
              />
            </View>
          </View>
        </Card>
        {confirm && (
          <Card style={styles.cardNumber}>
            <Text style={styles.number}>Chosen number</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => cb(selectedNumber)} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardNumber: {
    marginTop: 20,
    alignItems: "center",
  },
  number: {
    textAlign: "center",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
export default StartGameScreen;
