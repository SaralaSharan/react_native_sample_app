import { Text, View } from "react-native-web";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./ProfilCard/ProfilCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfilCard></ProfilCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
s;
