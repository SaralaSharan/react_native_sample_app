import { Image, Text, TouchableOpacity, View } from "react-native-web";
import { s } from "./ProfilCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard({
  firstName,
  lastName,
  age,
  // isOpenToWork,
  onPressSocialMediaIcon,
  // onPressTitle,
}) {
  // function onPressTitle_() {
  //   onPressTitle(firstName + " " + lastName);
  // }
  return (
    <>
      <View style={s.container}>
        <View style={s.header}>
          <View>
            <Image
              style={s.avatar}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
          </View>
          <View style={s.texts}>
            {/* <TouchableOpacity
            // onPress={onPressTitle_}
            > */}
            <Text style={s.name}>
              {firstName} {lastName}
            </Text>
            {/* </TouchableOpacity> */}
            <Text>
              {" "}
              Hi I am React Native Developer, I am {age} years old. lets get in
              Touch!
            </Text>
            {/* <Text
              style={{
                backgroundColor: isOpenToWork ? "green" : "red",
                color: "white",
              }}
            >
              {isOpenToWork
                ? "I am open to Work"
                : "I am not looking for a job"}
            </Text> */}
          </View>
        </View>
        <View style={s.social}>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("twitter")}
            style={s.socialBtn}
          >
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("linkedin")}
            style={s.socialBtn}
          >
            <FontAwesome name="linkedin" size={24} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("github")}
            style={s.socialBtn}
          >
            <FontAwesome name="github" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
