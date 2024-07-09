import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { useState } from "react";
import { Linking, Platform } from "react-native-web";

export default function App() {
  const [countClick, setCountClick] = useState(0);

  // function hello(name) {
  //   console.log("Button pressed");
  //   // Alert.alert("Hello!");
  //   window.alert("Hello " + name);
  //   setCountClick(countClick + 1);
  // }

  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "twitter":
        url = "https://x.com/SARALASK2";
        break;
      case "github":
        url = "https://github.com/SaralaSharan";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/sarala-sharanappa-kanakagiri/";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {/* Platform checker */}
        {/* {Platform.OS === "android" && <Text> Hi on Android </Text>}
        {Platform.OS === "ios" && <Text> Hi on IOS </Text>}
        {Platform.OS === "web" && <Text> Hi on Web </Text>} */}
        <ProfilCard
          // onPressTitle={hello}
          onPressSocialMediaIcon={goToSocialMedia}
          firstName={"Sarala"}
          lastName={"Sharan"}
          age={30}
        />
        {/* <Text> You clicked {countClick} time on the title </Text> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const [movie, setMovie] = useState("Star Wars");
// function updateMovie() {
//   setMovie("Titanic");
//   console.log(movie);
// }

//old code
{
  /* <SafeAreaProvider>
<SafeAreaView style={s.container}>
  {/* <ProfilCard
    firstName={"Sarala"}
    lastName={"Sharan"}
    age={26}
    isOpenToWork={true}
  ></ProfilCard> */
}
{
  /* <AgeCounter></AgeCounter> */
}
{
  /*} <TouchableOpacity onPress={updateMovie}>
    <Text style={{ fontSize: 40 }}> {movie} </Text>
  </TouchableOpacity>
</SafeAreaView>
</SafeAreaProvider> */
}
