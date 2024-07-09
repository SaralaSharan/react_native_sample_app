import { useState } from "react";
import { Text, TouchableOpacity } from "react-native-web";
import { DisplayAge } from "../DisplayAge/DisplayAge";

export function AgeCounter() {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }
  return (
    <>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase Age</Text>
      </TouchableOpacity>
      <DisplayAge age={age} />
    </>
  );
}
