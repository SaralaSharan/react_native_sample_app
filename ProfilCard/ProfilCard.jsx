import { Image, Text, TouchableOpacity, View } from "react-native-web";
import { s } from "./ProfilCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard() {
  console.log("ProfilCard component rendering");
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
            <Text style={s.name}> Sarala S K </Text>
            <Text> Hi I am React Native Developer, lets get in Touch!</Text>
          </View>
        </View>
        <View style={s.social}>
          <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="linkedin" size={24} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="github" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
